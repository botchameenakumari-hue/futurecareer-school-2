import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase-types';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL?.trim();
const supabasePublishableKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();
const supabaseProjectRef = supabaseUrl?.match(/^https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? 'workspace';
const supabaseAuthStorageKey = `fcs-${supabaseProjectRef}-auth-v1`;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabase = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl!, supabasePublishableKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: supabaseAuthStorageKey,
        detectSessionInUrl: true,
      },
    })
  : null;
