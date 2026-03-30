import { describe, it, expect } from 'vitest'
import { getFieldsForPurpose, getSizesForPlatform, getSizeByKey, TEMPLATES } from '../lib/config'

describe('getFieldsForPurpose', () => {
  it('returns headline, body, stat, statLabel, cta for product-feature', () => {
    const fields = getFieldsForPurpose('product-feature')
    expect(fields.map(f => f.key)).toEqual(['headline', 'body', 'stat', 'statLabel', 'cta'])
  })

  it('returns headline, body, cta for announcement', () => {
    const fields = getFieldsForPurpose('announcement')
    expect(fields.map(f => f.key)).toEqual(['headline', 'body', 'cta'])
  })

  it('returns companyName, stat, statLabel, quote, cta for case-study', () => {
    const fields = getFieldsForPurpose('case-study')
    expect(fields.map(f => f.key)).toEqual(['companyName', 'stat', 'statLabel', 'quote', 'cta'])
  })

  it('returns customerName, customerTitle, quote, cta for customer-proof', () => {
    const fields = getFieldsForPurpose('customer-proof')
    expect(fields.map(f => f.key)).toEqual(['customerName', 'customerTitle', 'quote', 'cta'])
  })

  it('returns eventName, date, location, body, cta for event', () => {
    const fields = getFieldsForPurpose('event')
    expect(fields.map(f => f.key)).toEqual(['eventName', 'date', 'location', 'body', 'cta'])
  })
})

describe('getSizesForPlatform', () => {
  it('returns 3 sizes for instagram', () => {
    expect(getSizesForPlatform('instagram')).toHaveLength(3)
  })
  it('returns 2 sizes for linkedin', () => {
    expect(getSizesForPlatform('linkedin')).toHaveLength(2)
  })
  it('returns 2 sizes for twitter', () => {
    expect(getSizesForPlatform('twitter')).toHaveLength(2)
  })
})

describe('TEMPLATES', () => {
  it('has 4 templates', () => {
    expect(TEMPLATES).toHaveLength(4)
  })
  it('each template has id, name, description', () => {
    TEMPLATES.forEach(t => {
      expect(t).toHaveProperty('id')
      expect(t).toHaveProperty('name')
      expect(t).toHaveProperty('description')
    })
  })
})

describe('getSizeByKey', () => {
  it('returns the correct AdSize for a valid key', () => {
    const size = getSizeByKey('instagram', '1:1')
    expect(size).toEqual({ key: '1:1', label: '1:1 Square', width: 1080, height: 1080 })
  })
  it('throws for an unknown key', () => {
    expect(() => getSizeByKey('instagram', 'unknown')).toThrow('Size unknown not found for platform instagram')
  })
})
