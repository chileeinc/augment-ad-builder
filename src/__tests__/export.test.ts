import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock html-to-image before importing export module
vi.mock('html-to-image', () => ({
  toPng: vi.fn().mockResolvedValue('data:image/png;base64,fake'),
  toSvg: vi.fn().mockResolvedValue('data:image/svg+xml;base64,fake'),
}))

import { exportPng, exportSvg, buildFilename } from '../lib/export'
import * as htmlToImage from 'html-to-image'

describe('buildFilename', () => {
  it('builds filename from platform, purpose, sizeKey', () => {
    expect(buildFilename('instagram', 'product-feature', '1:1')).toBe('augment-instagram-product-feature-1-1')
  })
  it('replaces colons and slashes with hyphens', () => {
    expect(buildFilename('linkedin', 'announcement', '1.91:1')).toBe('augment-linkedin-announcement-1.91-1')
  })
})

describe('exportPng', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls toPng with the element and pixelRatio 2', async () => {
    const el = document.createElement('div')
    await exportPng(el, 'test-file')
    expect(htmlToImage.toPng).toHaveBeenCalledWith(el, expect.objectContaining({ pixelRatio: 2 }))
  })
})

describe('exportSvg', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls toSvg with the element', async () => {
    const el = document.createElement('div')
    await exportSvg(el, 'test-file')
    expect(htmlToImage.toSvg).toHaveBeenCalledWith(el, expect.any(Object))
  })
})
