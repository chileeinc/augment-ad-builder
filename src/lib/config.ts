import type { CopyField, Platform, AdSize, TemplateMeta, Purpose } from './types'

const FIELDS: Record<Purpose, CopyField[]> = {
  'product-feature': [
    { key: 'headline', label: 'Headline', type: 'input', maxLength: 80, placeholder: 'Code faster with AI that knows your codebase' },
    { key: 'body', label: 'Body', type: 'textarea', maxLength: 150, placeholder: 'Augment indexes your entire repo so suggestions are always in context.' },
    { key: 'stat', label: 'Stat', type: 'input', maxLength: 20, placeholder: '10×' },
    { key: 'statLabel', label: 'Stat label', type: 'input', maxLength: 40, placeholder: 'faster context' },
    { key: 'cta', label: 'CTA', type: 'input', maxLength: 30, placeholder: 'Try free →' },
  ],
  'announcement': [
    { key: 'headline', label: 'Headline', type: 'input', maxLength: 80, placeholder: 'Introducing Code Review by Augment' },
    { key: 'body', label: 'Body', type: 'textarea', maxLength: 150, placeholder: 'Automated dependency analysis across your entire monorepo.' },
    { key: 'cta', label: 'CTA', type: 'input', maxLength: 30, placeholder: 'Learn more →' },
  ],
  'case-study': [
    { key: 'companyName', label: 'Company name', type: 'input', maxLength: 40, placeholder: 'Verisk' },
    { key: 'stat', label: 'Result stat', type: 'input', maxLength: 20, placeholder: '3×' },
    { key: 'statLabel', label: 'Stat label', type: 'input', maxLength: 40, placeholder: 'faster onboarding' },
    { key: 'quote', label: 'Quote', type: 'textarea', maxLength: 160, placeholder: 'Augment eliminated our most painful dependency review process.' },
    { key: 'cta', label: 'CTA', type: 'input', maxLength: 30, placeholder: 'Read case study →' },
  ],
  'customer-proof': [
    { key: 'customerName', label: 'Customer name', type: 'input', maxLength: 40, placeholder: 'Sarah Chen' },
    { key: 'customerTitle', label: 'Title / Company', type: 'input', maxLength: 60, placeholder: 'Staff Engineer, Acme Corp' },
    { key: 'quote', label: 'Quote', type: 'textarea', maxLength: 160, placeholder: 'Reduced our onboarding from weeks to days.' },
    { key: 'cta', label: 'CTA', type: 'input', maxLength: 30, placeholder: 'Try free →' },
  ],
  'event': [
    { key: 'eventName', label: 'Event name', type: 'input', maxLength: 60, placeholder: 'Augment at KubeCon' },
    { key: 'date', label: 'Date', type: 'input', maxLength: 30, placeholder: 'Nov 12–15, 2026' },
    { key: 'location', label: 'Location', type: 'input', maxLength: 60, placeholder: 'Chicago, IL — Booth #420' },
    { key: 'body', label: 'Body', type: 'textarea', maxLength: 150, placeholder: 'Come meet the team and see live demos.' },
    { key: 'cta', label: 'CTA', type: 'input', maxLength: 30, placeholder: 'Register →' },
  ],
}

const SIZES: Record<Platform, AdSize[]> = {
  instagram: [
    { key: '1:1', label: '1:1 Square', width: 1080, height: 1080 },
    { key: '4:5', label: '4:5 Portrait', width: 1080, height: 1350 },
    { key: '9:16', label: '9:16 Story', width: 1080, height: 1920 },
  ],
  linkedin: [
    { key: '1:1', label: '1:1 Square', width: 1200, height: 1200 },
    { key: '1.91:1', label: '1.91:1 Landscape', width: 1200, height: 628 },
  ],
  twitter: [
    { key: '16:9', label: '16:9 Landscape', width: 1200, height: 675 },
    { key: '1:1', label: '1:1 Square', width: 1200, height: 1200 },
  ],
}

export const TEMPLATES: TemplateMeta[] = [
  { id: 'big-type-body', name: 'Big Type + Body', description: 'Company name, light headline, accent body, proof footer' },
  { id: 'logo-type-product-shot', name: 'Logo + Type + Product Shot', description: 'Logo top, light headline, image from library, CTA footer' },
  { id: 'stat-hero', name: 'Stat Hero', description: 'Giant mono stat, light headline, CTA' },
  { id: 'customer-quote', name: 'Customer Quote', description: 'Customer logos, pull quote, attribution, CTA' },
]

export function getFieldsForPurpose(purpose: Purpose): CopyField[] {
  return FIELDS[purpose]
}

export function getSizesForPlatform(platform: Platform): AdSize[] {
  return SIZES[platform]
}

export function getSizeByKey(platform: Platform, key: string): AdSize {
  const size = SIZES[platform].find(s => s.key === key)
  if (!size) throw new Error(`Size ${key} not found for platform ${platform}`)
  return size
}
