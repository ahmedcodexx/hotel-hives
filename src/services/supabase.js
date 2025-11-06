import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://apghizfsszudxfpdohsp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZ2hpemZzc3p1ZHhmcGRvaHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0OTQ4NjUsImV4cCI6MjA3NjA3MDg2NX0.qAdf6yXDcMciX1KWjWD14-W3nJgm7pX8iqX72oDvrz8"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;