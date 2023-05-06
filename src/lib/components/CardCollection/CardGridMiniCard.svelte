<script lang="ts">
	import type { Photo } from '$lib/types/supabase.interface';
	import { onMount } from 'svelte';

	// export let hidden = true;
	export let card: Photo | null = null;
	export let tier: number;

	let loaded = false;

	onMount(() => {
		if (!card) return;

		const img = new Image();
		img.src = card.url;

		img.onload = () => {
			loaded = true;
		};
	});
</script>

<div class="relative">
	<button
		class="z-10 border border-stone-800 p-2 rounded-xl flex justify-center items-center bg-white/20 relative backdrop-blur-lg shadow-lg duration-75"
	>
		{#if loaded && card}
			<img src={card.url} class="h-36 rounded-xl" alt="samanta card" />
		{:else}
			<p class="text-[50px] relative z-10 h-36 w-[81px]">?</p>
		{/if}
	</button>
	<!-- SHADOW -->
	<div
		class="rounded-lg bg-gradient-to-br animate-rainbow-fast absolute top-0 left-0 w-full h-full z-0 opacity-50"
		class:shadow-tier-1={tier === 1}
		class:shadow-tier-2={tier === 2}
		class:shadow-tier-3={tier === 3}
	/>
</div>

<style lang="postcss">
	.shadow-tier-1 {
		@apply from-teal-400 via-green-400 to-lime-400 blur-sm;
	}
	.shadow-tier-2 {
		@apply from-indigo-400 via-purple-400 to-pink-400 blur-sm;
	}
	.shadow-tier-3 {
		@apply from-red-400 via-orange-400 to-yellow-400 blur-sm;
	}
</style>
