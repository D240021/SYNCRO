import { createClient } from '@supabase/supabase-js';

const isTest = process.env.NODE_ENV === 'test';
const supabaseUrl = process.env.SUPABASE_URL || (isTest ? 'http://localhost' : '');
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || (isTest ? 'test-key' : '');

if (!isTest && (!supabaseUrl || !supabaseServiceKey)) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

