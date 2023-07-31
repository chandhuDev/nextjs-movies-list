import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Home from './page'

const navigate =async () => {
  const supabase = createServerComponentClient({cookies})
  const { data: {session} } = await supabase.auth.getSession()

  if(!session){
    redirect('/login')
  }

  return (
    <Home />
  )
}

export default navigate
