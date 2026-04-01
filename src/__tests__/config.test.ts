import { describe, it, expect } from 'vitest'
import { getFieldsForTemplate, getSizesForPlatform, getSizeByKey, TEMPLATES } from '../lib/config'

describe('getFieldsForTemplate', () => {
  it('returns headline, body, cta for big-headline', () => {
    const fields = getFieldsForTemplate('big-headline')
    expect(fields.map((f: { key: string }) => f.key)).toEqual(['headline', 'body', 'cta'])
  })

  it('returns quote, customerName, customerTitle, cta for quote-ad', () => {
    const fields = getFieldsForTemplate('quote-ad')
    expect(fields.map((f: { key: string }) => f.key)).toEqual(['quote', 'customerName', 'customerTitle', 'cta'])
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
  it('has 2 templates', () => {
    expect(TEMPLATES).toHaveLength(2)
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
