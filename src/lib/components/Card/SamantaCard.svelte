<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut, cubicIn } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import DiscoveredCard from './DiscoveredCard.svelte';
	import HiddenCard from './HiddenCard.svelte';

	export let cardInfo: {
		url: string;
		title: string;
		tier: number;
	};
	export let showDiscoveredCard = false;

	const dispatch = createEventDispatcher();

	const ANIMATION_CYCLE_MILLISECONDS = 1000;

	const hiddenCard = {
		spin: false
	};

	const discoveredCard = {
		spin: false,
		showTier: showDiscoveredCard
	};

	const animationDurationOfHiddenCard = tweened(1, {
		duration: 10000,
		easing: cubicOut
	});
	const animationDurationOfDiscoveredCard = tweened(0.1, {
		duration: 10000,
		easing: cubicIn
	});

	const discoverCard = (e: Event) => {
		hiddenCard.spin = true;
		animationDurationOfHiddenCard.set(0.1);

		setTimeout(() => {
			discoveredCard.spin = true;
		}, ANIMATION_CYCLE_MILLISECONDS / 2);

		setTimeout(() => {
			hiddenCard.spin = false;
			showDiscoveredCard = true;
			discoveredCard.showTier = true;
			animationDurationOfDiscoveredCard.set(1);
		}, ANIMATION_CYCLE_MILLISECONDS * 4 + ANIMATION_CYCLE_MILLISECONDS / 2);

		setTimeout(() => {
			discoveredCard.spin = false;
			dispatch('card-discover', {});
		}, ANIMATION_CYCLE_MILLISECONDS * 8 + ANIMATION_CYCLE_MILLISECONDS / 2);
	};
</script>

{#if !showDiscoveredCard}
	<HiddenCard
		on:click={discoverCard}
		spin={hiddenCard.spin}
		animationDuration={$animationDurationOfHiddenCard}
	/>
{:else}
	<DiscoveredCard
		spin={discoveredCard.spin}
		showTier={discoveredCard.showTier}
		animationDuration={$animationDurationOfDiscoveredCard}
		imageUrl={cardInfo.url}
		tier={cardInfo.tier}
	/>
{/if}
