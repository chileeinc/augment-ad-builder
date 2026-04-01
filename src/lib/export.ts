import { toPng, toSvg } from 'html-to-image'

export function buildFilename(platform: string, template: string, sizeKey: string): string {
  const clean = (s: string) => s.replace(/:/g, '-').replace(/\//g, '-')
  return `augment-${clean(platform)}-${clean(template)}-${clean(sizeKey)}`
}

function triggerDownload(dataUrl: string, filename: string) {
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  a.click()
}

export async function exportPng(el: HTMLElement, filename: string): Promise<void> {
  await document.fonts?.ready
  const dataUrl = await toPng(el, { pixelRatio: 2, cacheBust: true })
  triggerDownload(dataUrl, `${filename}.png`)
}

export async function exportSvg(el: HTMLElement, filename: string): Promise<void> {
  await document.fonts?.ready
  const dataUrl = await toSvg(el, { cacheBust: true })
  triggerDownload(dataUrl, `${filename}.svg`)
}
