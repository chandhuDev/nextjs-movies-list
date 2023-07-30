
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpemRndWp4YXVzZHdod3d0bGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MjU4OTksImV4cCI6MjAwNjMwMTg5OX0.ClsAu7zzySvFyBm-BDRPbYVhVUu-0v8sZ2ugBgjwkH8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase



