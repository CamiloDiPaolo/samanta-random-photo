<script lang="ts">
	import CardLeaderboard from '$lib/components/CardCollection/CardLeaderboard.svelte';
	import AmazingTitle from '$lib/components/Text/AmazingTitle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
	const leaderboard = data.leaderboard;
</script>

<AmazingTitle>Leaderboard</AmazingTitle>
<div
	class="flex flex-col gap-2 border border-fuchsia-400 sm:p-10 p-2 rounded-lg bg-fuchsia-200/10 backdrop-blur-lg h-2/3 overflow-y-scroll"
>
	{#each leaderboard.sort((user1, user2) => {
		const score1 = user1.tier_3 * 10 + user1.tier_2 * 5 + user1.tier1;
		const score2 = user2.tier_3 * 10 + user2.tier_2 * 5 + user2.tier1;
		return score2 - score1;
	}) as score}
		<div class="flex justify-between items-center sm:gap-10 gap-2">
			<div class="flex gap-2 justify-start items-center">
				<img src={score.picture} class="rounded-full sm:w-16 sm:h-16 w-8 h-8" />
				<p class="sm:text-md text-sm">{score.username}</p>
			</div>
			<div class="flex gap-2">
				<CardLeaderboard tier={3} number={score.tier_3} />
				<CardLeaderboard tier={2} number={score.tier_2} />
				<CardLeaderboard tier={1} number={score.tier_1} />
			</div>
		</div>
	{/each}
</div>
