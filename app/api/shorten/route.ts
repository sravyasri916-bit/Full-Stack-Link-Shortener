import { supabase } from '@/lib/supabase'
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  const body = await req.json()
  const originalUrl = body.url

  const shortCode = nanoid(6)

  const { data, error } = await supabase
    .from('links')
    .insert([
      {
        short_code: shortCode,
        original_url: originalUrl
      }
    ])

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({
    shortCode,
    shortUrl: `/r/${shortCode}`
  })
}