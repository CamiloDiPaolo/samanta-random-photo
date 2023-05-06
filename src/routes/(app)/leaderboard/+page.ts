import { getLeaderboard } from '$lib/supabase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const leaderboard = await getLeaderboard();

	return {
		leaderboard: leaderboard ?? []
	};
};
