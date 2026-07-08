import { siteConfig } from '../config/site';

export interface ContactValues {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
  privacy: boolean;
  website: string;
  startedAt: number;
}

export function validateContact(values: ContactValues, messages: Record<string, string>) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (!values.name.trim()) errors.name = messages.required;
  if (!values.email.trim()) errors.email = messages.required;
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = messages.email;
  if (!values.projectType) errors.projectType = messages.required;
  if (values.message.trim().length < 20) errors.message = messages.message;
  if (!values.privacy) errors.privacy = messages.privacy;
  return errors;
}

export function buildMailto(values: ContactValues) {
  const subject = encodeURIComponent(`Projektanfrage von ${values.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `E-Mail: ${values.email}`,
      `Unternehmen: ${values.company || '-'}`,
      `Projektart: ${values.projectType}`,
      `Zeitraum: ${values.timeline || '-'}`,
      `Budget: ${values.budget || '-'}`,
      '',
      values.message,
    ].join('\n'),
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
