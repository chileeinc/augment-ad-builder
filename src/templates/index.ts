import type { TemplateId, AdConfig } from '../lib/types'
import type { ComponentType } from 'react'
import BigHeadline from './BigHeadline'
import QuoteAd from './QuoteAd'

type TemplateComponent = ComponentType<{ config: AdConfig }>

const TEMPLATE_COMPONENTS: Record<TemplateId, TemplateComponent> = {
  'big-headline': BigHeadline,
  'quote-ad': QuoteAd,
}

export function getTemplateComponent(id: TemplateId): TemplateComponent {
  return TEMPLATE_COMPONENTS[id]
}
