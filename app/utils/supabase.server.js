import { createClient } from "@supabase/supabase-js";

 const supabase_url = "https://dwynjiitrdbrxzthygdm.supabase.co"
 const supabase_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eW5qaWl0cmRicnh6dGh5Z2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMTUxOTgsImV4cCI6MTk5MDc5MTE5OH0.PDjCzFAFqQ0YkqcP9iysNEiHx0DZ-JU9OD4wBwwzz0g"


 export const supabase = createClient(
    supabase_url, supabase_api
  )