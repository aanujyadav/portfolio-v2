import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our testimonials
export interface Testimonial {
  id?: string
  created_at?: string
  name: string
  email: string
  role: string
  company: string
  relationship: string
  project: string
  rating: number
  testimonial: string
  status: 'pending' | 'approved' | 'rejected'
  consent: boolean
}

export interface TestimonialInsert {
  name: string
  email: string
  role: string
  company: string
  relationship: string
  project: string
  rating: number
  testimonial: string
  status?: 'pending'
  consent: boolean
}