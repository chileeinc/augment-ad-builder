import type { TemplateId } from '../lib/types'
import type { ComponentType } from 'react'
import type { AdConfig } from '../lib/types'
import BigTypeBody from './BigTypeBody'
import LogoTypeProductShot from './LogoTypeProductShot'
import StatHero from './StatHero'
import CustomerQuote from './CustomerQuote'

type TemplateComponent = ComponentType<{ config: AdConfig }>

const TEMPLATE_COMPONENTS: Record<TemplateId, TemplateComponent> = {
  'big-type-body': BigTypeBody,
  'logo-type-product-shot': LogoTypeProductShot,
  'stat-hero': StatHero,
  'customer-quote': CustomerQuote,
}

export function getTemplateComponent(id: TemplateId): TemplateComponent {
  return TEMPLATE_COMPONENTS[id]
}
