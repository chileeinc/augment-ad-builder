export type Platform = 'instagram' | 'linkedin' | 'twitter'
export type Purpose = 'product-feature' | 'announcement' | 'case-study' | 'customer-proof'
export type TemplateId = 'big-type-body' | 'customer-quote'
export type Theme = 'dark' | 'light' | 'tonal'
export type Background = 'none' | 'dot-grid' | 'grid'

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
  cta?: string
  companyName?: string
  quote?: string
  customerName?: string
  customerTitle?: string
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
