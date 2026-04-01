import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const supabase = url && key ? createClient(url, key) : null

export async function fetchImages(): Promise<{ id: string; url: string; filename: string }[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('images')
    .select('id, filename, storage_path, uploaded_at')
    .order('uploaded_at', { ascending: false })
  if (error) throw error
  return (data ?? []).map(row => ({
    id: row.id,
    filename: row.filename,
    url: supabase.storage.from('ad-images').getPublicUrl(row.storage_path).data.publicUrl,
  }))
}

export async function uploadImage(file: File): Promise<{ id: string; url: string; filename: string }> {
  if (!supabase) throw new Error('Supabase not configured')
  const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
  const { error: uploadError } = await supabase.storage.from('ad-images').upload(path, file)
  if (uploadError) throw uploadError

  const { error: dbError } = await supabase
    .from('images')
    .insert({ filename: file.name, storage_path: path })
  if (dbError) throw dbError

  const url = supabase.storage.from('ad-images').getPublicUrl(path).data.publicUrl
  const { data } = await supabase.from('images').select('id').eq('storage_path', path).single()
  return { id: data!.id, url, filename: file.name }
}
