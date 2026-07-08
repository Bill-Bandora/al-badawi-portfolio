import { Clipboard } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export function CopyEmailButton() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={async () => {
        await navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
    >
      <Clipboard className="me-2 size-4" aria-hidden="true" />
      {copied ? t('common.copied') : t('common.copyEmail')}
    </Button>
  );
}
