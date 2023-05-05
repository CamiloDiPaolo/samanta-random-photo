import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(PUBLIC_SUPABASE_URL as string, PUBLIC_SUPABASE_ANON_KEY as string);

export const getSession = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session) return null;
	return session;
};

export const googleOAuth = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			queryParams: {
				access_type: 'offline',
				prompt: 'consent'
			}
		}
	});
};

export default supabase;
