import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const navbarItems=[
    'products',
    'dao',
    'build',
    'docs'
]

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClientComponentClient(supabaseUrl,supabaseKey)

export default supabase




