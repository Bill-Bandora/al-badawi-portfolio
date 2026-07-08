import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../config/site';
import { buildMailto, type ContactValues, validateContact } from '../../utils/contact';
import { Button } from '../ui/Button';

const initialValues: ContactValues = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  timeline: '',
  budget: '',
  message: '',
  privacy: false,
  website: '',
  startedAt: Date.now(),
};

export function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const errors = useMemo(
    () =>
      validateContact(values, {
        required: t('contact.errors.required'),
        email: t('contact.errors.email'),
        privacy: t('contact.errors.privacy'),
        message: t('contact.errors.message'),
      }),
    [values, t],
  );
  const types = t('contact.types', { returnObjects: true }) as string[];
  const budgets = t('contact.budgets', { returnObjects: true }) as string[];

  const setValue = (name: keyof ContactValues, value: string | boolean) => setValues((current) => ({ ...current, [name]: value }));
  const showError = (name: keyof ContactValues) => touched[name] && errors[name];

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setTouched({ name: true, email: true, projectType: true, message: true, privacy: true });
    if (Object.keys(errors).length > 0 || values.website) return;
    setSubmitting(true);
    try {
      if (siteConfig.contactMode === 'php') {
        const response = await fetch('/api/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error('contact_failed');
      } else {
        window.location.href = buildMailto(values);
      }
      setStatus(t('contact.success'));
      setValues({ ...initialValues, startedAt: Date.now() });
    } catch {
      setStatus('Die Anfrage konnte nicht gesendet werden. Bitte nutze die E-Mail-Adresse direkt.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-card border border-slate-200 bg-white p-5 shadow-sm md:p-8" noValidate>
      {siteConfig.contactMode === 'mailto' ? <p className="rounded-card bg-cyan/10 p-3 text-sm text-cyan">{t('contact.mailtoInfo')}</p> : null}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input value={values.website} onChange={(event) => setValue('website', event.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="name" label={t('contact.fields.name')} value={values.name} error={showError('name')} onBlur={() => setTouched((c) => ({ ...c, name: true }))} onChange={(value) => setValue('name', value)} required />
        <Field name="email" label={t('contact.fields.email')} type="email" value={values.email} error={showError('email')} onBlur={() => setTouched((c) => ({ ...c, email: true }))} onChange={(value) => setValue('email', value)} required />
        <Field name="company" label={t('contact.fields.company')} value={values.company} onChange={(value) => setValue('company', value)} />
        <Field name="timeline" label={t('contact.fields.timeline')} value={values.timeline} onChange={(value) => setValue('timeline', value)} />
      </div>
      <SelectField name="projectType" label={t('contact.fields.projectType')} value={values.projectType} options={types} error={showError('projectType')} onBlur={() => setTouched((c) => ({ ...c, projectType: true }))} onChange={(value) => setValue('projectType', value)} required />
      <SelectField name="budget" label={t('contact.fields.budget')} value={values.budget} options={budgets} onChange={(value) => setValue('budget', value)} />
      <div>
        <label htmlFor="message" className="font-medium text-ink">
          {t('contact.fields.message')} *
        </label>
        <textarea id="message" maxLength={1200} rows={7} value={values.message} onBlur={() => setTouched((c) => ({ ...c, message: true }))} onChange={(event) => setValue('message', event.target.value)} aria-describedby="message-error message-count" className="mt-2 w-full rounded-card border border-slate-300 px-4 py-3 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20" />
        <div className="mt-1 flex justify-between text-sm">
          <span id="message-error" className="text-red-700" aria-live="polite">
            {showError('message') || ''}
          </span>
          <span id="message-count" className="text-slate-500">
            {values.message.length}/1200
          </span>
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input type="checkbox" checked={values.privacy} onChange={(event) => setValue('privacy', event.target.checked)} onBlur={() => setTouched((c) => ({ ...c, privacy: true }))} className="mt-1 size-5 rounded border-slate-300 text-cyan focus:ring-cyan" />
        <span>
          {t('contact.privacy')} *
          <span className="block text-red-700" aria-live="polite">
            {showError('privacy') || ''}
          </span>
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? t('contact.sending') : t('contact.send')}
        </Button>
        <p aria-live="polite" className="text-sm font-medium text-slate-700">
          {status}
        </p>
      </div>
    </form>
  );
}

function Field({ name, label, value, onChange, error, type = 'text', required, onBlur }: { name: string; label: string; value: string; onChange: (value: string) => void; error?: string | false; type?: string; required?: boolean; onBlur?: () => void }) {
  return (
    <div>
      <label htmlFor={name} className="font-medium text-ink">
        {label} {required ? '*' : ''}
      </label>
      <input id={name} type={type} value={value} maxLength={120} onBlur={onBlur} onChange={(event) => onChange(event.target.value)} aria-describedby={`${name}-error`} className="mt-2 w-full rounded-card border border-slate-300 px-4 py-3 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20" />
      <p id={`${name}-error`} className="mt-1 min-h-5 text-sm text-red-700" aria-live="polite">
        {error || ''}
      </p>
    </div>
  );
}

function SelectField({ name, label, value, options, onChange, error, required, onBlur }: { name: string; label: string; value: string; options: string[]; onChange: (value: string) => void; error?: string | false; required?: boolean; onBlur?: () => void }) {
  return (
    <div>
      <label htmlFor={name} className="font-medium text-ink">
        {label} {required ? '*' : ''}
      </label>
      <select id={name} value={value} onBlur={onBlur} onChange={(event) => onChange(event.target.value)} aria-describedby={`${name}-error`} className="mt-2 w-full rounded-card border border-slate-300 bg-white px-4 py-3 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20">
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p id={`${name}-error`} className="mt-1 min-h-5 text-sm text-red-700" aria-live="polite">
        {error || ''}
      </p>
    </div>
  );
}
