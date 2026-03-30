export type Platform = 'instagram' | 'linkedin' | 'twitter'
export type Purpose = 'product-feature' | 'announcement' | 'case-study' | 'customer-proof' | 'event'
export type TemplateId = 'big-type-body' | 'logo-type-product-shot' | 'stat-hero' | 'customer-quote'
export type Theme = 'dark' | 'light' | 'tonal'
export type Background = 'none' | 'dot-grid' | 'fine-grid'

export interface AdSize {
  key: string
  label: string
  width: number
  height: number
}

export interface CopyField {
  key: keyof CopyData
  label: string
  type: 'input' | 'textarea'
  maxLength: number
  placeholder: string
}

export interface CopyData {
  headline?: string
  body?: string
  stat?: string
  statLabel?: string
  cta?: string
  companyName?: string
  quote?: string
  customerName?: string
  customerTitle?: string
  eventName?: string
  date?: string
  location?: string
}

export interface TemplateMeta {
  id: TemplateId
  name: string
  description: string
}

export interface AdConfig {
  platform: Platform
  purpose: Purpose
  template: TemplateId
  theme: Theme
  background: Background
  sizeKey: string
  showLogo: boolean
  copy: CopyData
  imageUrl: string | null
}

export interface LibraryImage {
  id: string
  url: string
  filename: string
  uploaded_at: string
}
