import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://btngblwkfufgusslylqs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0bmdibHdrZnVmZ3Vzc2x5bHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MjAyNzcsImV4cCI6MjAzNjk5NjI3N30.XRc0t5C9jAdQnR-US13VkSAEUctHZbtJLamxOQQFgo8')