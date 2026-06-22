import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params

  const { data } = await supabase
    .from('links')
    .select('*')
    .eq('short_code', code)
    .single()

  if (data) {
    redirect(data.original_url)
  }

  return <h1>Link Not Found</h1>
}