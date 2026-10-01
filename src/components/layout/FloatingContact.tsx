import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl } from '../../config/site';

type FabPosition = { side: 'left' | 'right'; y: number };
const storageKey = 'bandora-contact-fab-position';
const buttonSize = 56;
const margin = 16;

function bounds() {
  const mobile = window.innerWidth < 1024;
  return { minY: 76, maxY: window.innerHeight - buttonSize - (mobile ? 88 : 20) };
}

function clampPosition(position: FabPosition): FabPosition {
  const { minY, maxY } = bounds();
  return { side: position.side, y: Math.min(Math.max(position.y, minY), Math.max(minY, maxY)) };
}

function parsePosition(value: string | null): FabPosition | null {
  if (!value) return null;
  const candidate = JSON.parse(value) as Partial<FabPosition>;
  if ((candidate.side !== 'left' && candidate.side !== 'right') || !Number.isFinite(candidate.y)) return null;
  return { side: candidate.side, y: candidate.y as number };
}

export function FloatingContact() {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  const [position, setPosition] = useState<FabPosition | null>(null);
  const [dragging, setDragging] = useState(false);
  const livePosition = useRef<FabPosition | null>(null);
  const drag = useRef<{ id: number; startX: number; startY: number; x: number; y: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  useEffect(() => {
    const fallback = clampPosition({ side: 'right', y: window.innerHeight - 160 });
    try {
      const stored = parsePosition(localStorage.getItem(storageKey));
      const next = clampPosition(stored ?? fallback);
      livePosition.current = next;
      setPosition(next);
    } catch { livePosition.current = fallback; setPosition(fallback); }
    const onResize = () => setPosition((current) => {
      const next = current ? clampPosition(current) : fallback;
      livePosition.current = next;
      return next;
    });
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function pointerDown(event: ReactPointerEvent<HTMLAnchorElement>) {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    drag.current = { id: event.pointerId, startX: event.clientX, startY: event.clientY, x: rect.left, y: rect.top, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function pointerMove(event: ReactPointerEvent<HTMLAnchorElement>) {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (!state.moved && Math.hypot(dx, dy) < 7) return;
    event.preventDefault();
    state.moved = true;
    setDragging(true);
    const { minY, maxY } = bounds();
    const x = Math.min(Math.max(state.x + dx, margin), window.innerWidth - buttonSize - margin);
    const y = Math.min(Math.max(state.y + dy, minY), maxY);
    const next = { side: x + buttonSize / 2 < window.innerWidth / 2 ? 'left' as const : 'right' as const, y };
    livePosition.current = next;
    setPosition(next);
  }

  function pointerUp(event: ReactPointerEvent<HTMLAnchorElement>) {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    drag.current = null;
    if (state.moved && livePosition.current) {
      suppressClick.current = true;
      const next = clampPosition(livePosition.current);
      livePosition.current = next;
      setPosition(next);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* Keep the in-memory position when storage is unavailable. */ }
      window.setTimeout(() => { suppressClick.current = false; }, 0);
    }
    setDragging(false);
  }

  const sideStyle = position?.side === 'left' ? { left: margin, right: 'auto' } : { right: margin, left: 'auto' };
  return (
    <Link
      data-testid="contact-fab"
      draggable={false}
      to={localizedUrl('contact', lang)}
      aria-label={`${t('common.discussProject')} — Floating contact`}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      onDragStart={(event) => event.preventDefault()}
      onClick={(event) => { if (suppressClick.current) event.preventDefault(); }}
      style={position ? { ...sideStyle, top: position.y, bottom: 'auto', touchAction: 'none' } : { right: margin }}
      className={`fixed z-30 inline-flex min-h-14 min-w-14 select-none items-center justify-center gap-2 rounded-full border border-gold/60 bg-night/[0.95] px-4 font-semibold text-white shadow-[0_12px_45px_rgba(8,145,178,0.3)] backdrop-blur transition-[transform,border-color,color,left,right] duration-200 hover:-translate-y-1 hover:border-cyan hover:text-cyan focus-visible:outline-cyan motion-reduce:transition-none max-[639px]:px-0 ${position ? '' : 'bottom-[calc(6rem+env(safe-area-inset-bottom))] sm:bottom-6'} ${dragging ? 'scale-95 cursor-grabbing' : 'cursor-grab'}`}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">{t('common.discussProject')}</span>
    </Link>
  );
}
