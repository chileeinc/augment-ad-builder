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
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchImages().then(setImages).catch(console.error)
  }, [])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const img = await uploadImage(file)
      setImages(prev => [img, ...prev])
      onSelect(img.url)
    } catch (err) {
      console.error(err)
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div className="panel-section">
      <div className="section-label">Image</div>
      <div className="image-grid">
        <div
          className="upload-tile"
          onClick={() => fileInputRef.current?.click()}
          title="Upload image"
        >
          {uploading ? '…' : '+'}
        </div>
        {images.map(img => (
          <div
            key={img.id}
            className={`image-thumb${selectedUrl === img.url ? ' active' : ''}`}
            onClick={() => onSelect(selectedUrl === img.url ? null : img.url)}
            title={img.filename}
          >
            <img src={img.url} alt={img.filename} loading="lazy" />
          </div>
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
