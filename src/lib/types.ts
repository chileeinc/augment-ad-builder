export type Platform = 'instagram' | 'linkedin' | 'twitter'
export type TemplateId = 'big-headline' | 'quote-ad'
export type Theme = 'dark' | 'light' | 'tonal'
export type Background = 'none' | 'dot-grid' | 'grid'
export type CtaStyle = 'filled-arrow' | 'mono-wide' | 'terminal' | 'corner-brackets' | 'ticker' | 'barcode'
export type LogoPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

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
  template: TemplateId
  theme: Theme
  background: Background
  sizeKey: string
  showLogo: boolean
  ctaStyle: CtaStyle
  logoPosition: LogoPosition
  copy: CopyData
  imageUrl: string | null
}

export interface LibraryImage {
  id: string
  url: string
  filename: string
  uploaded_at: string
}
