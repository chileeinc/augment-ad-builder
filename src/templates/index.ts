import type { TemplateId, AdConfig } from '../lib/types'
import type { ComponentType } from 'react'
import BigTypeBody from './BigTypeBody'
import CustomerQuote from './CustomerQuote'

type TemplateComponent = ComponentType<{ config: AdConfig }>

const TEMPLATE_COMPONENTS: Record<TemplateId, TemplateComponent> = {
  'big-type-body': BigTypeBody,
  'customer-quote': CustomerQuote,
}

export function getTemplateComponent(id: TemplateId): TemplateComponent {
  return TEMPLATE_COMPONENTS[id]
}
