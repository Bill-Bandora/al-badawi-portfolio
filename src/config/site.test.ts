import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { languages, localizedContentPath, routePath } from './site';

describe('localized SEO paths', () => {
  it('maps every project detail reciprocally across all languages', () => {
    for (const project of projects) {
      for (const source of languages) {
        const sourcePath = `${routePath('projects', source.code)}/${project.slug}`;
        for (const target of languages) {
          expect(localizedContentPath(sourcePath, target.code)).toBe(`${routePath('projects', target.code)}/${project.slug}`);
        }
      }
    }
  });

  it('maps every service detail reciprocally across all languages', () => {
    for (const service of services) {
      for (const source of languages) {
        const sourcePath = `${routePath('services', source.code)}/${service.slug}`;
        for (const target of languages) {
          expect(localizedContentPath(sourcePath, target.code)).toBe(`${routePath('services', target.code)}/${service.slug}`);
        }
      }
    }
  });

  it('keeps shared and language-specific top-level routes valid', () => {
    expect(localizedContentPath('blogs/example', 'ar')).toBe('blogs/example');
    expect(localizedContentPath('about', 'de')).toBe('ueber-mich');
    expect(localizedContentPath('kontakt', 'en')).toBe('contact');
    expect(localizedContentPath('', 'de')).toBe('');
  });
});
