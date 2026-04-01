import { useState, useEffect, useRef } from 'react'
import { fetchImages, uploadImage } from '../lib/supabase'

interface LibImage { id: string; url: string; filename: string }

interface Props {
  selectedUrl: string | null
  onSelect: (url: string | null) => void
}

export default function ImageLibrary({ selectedUrl, onSelect }: Props) {
  const [images, setImages] = useState<LibImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchImages().then(setImages).catch(err => setError(String(err?.message ?? err)))
  }, [])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError(null)
    try {
      const img = await uploadImage(file)
      setImages(prev => [img, ...prev])
      onSelect(img.url)
    } catch (err: any) {
      setError(err?.message ?? String(err))
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div className="panel-section">
      <div className="section-label">Image</div>
      {error && <div className="upload-error">{error}</div>}
      <div className="image-grid">
        <button
          className="upload-tile"
          onClick={() => fileInputRef.current?.click()}
          title="Upload image"
          type="button"
        >
          {uploading ? '…' : '+'}
        </button>
        {images.map(img => (
          <button
            key={img.id}
            className={`image-thumb${selectedUrl === img.url ? ' active' : ''}`}
            onClick={() => onSelect(selectedUrl === img.url ? null : img.url)}
            title={img.filename}
            type="button"
          >
            <img src={img.url} alt={img.filename} loading="lazy" />
          </button>
        ))}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/svg+xml"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </div>
  )
}
