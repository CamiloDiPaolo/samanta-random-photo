// See https://kit.svelte.dev/docs/types#app

import type { AuthError, AuthResponse, Session, SupabaseClient } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			getSession: () => Promise<Session | null>;
			setSession: (currentSession: {
				access_token: string;
				refresh_token: string;
			}) => Promise<AuthResponse>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
