import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-cyan via-electric to-blue shadow-[0_0_14px_rgba(34,211,238,0.8)] transition-all" style={{ width: `${progress}%` }} />;
}
