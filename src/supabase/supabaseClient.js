import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://qdzmxalxsnyjkqxgppfe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkem14YWx4c255amtxeGdwcGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NjUzODQsImV4cCI6MjA0NTI0MTM4NH0._dkbBS5ldICEK5ij2VE6A4pC5F3OwKKdp6dRMWNCS7w")

export default supabase;