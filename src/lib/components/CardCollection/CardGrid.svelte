<script lang="ts">
	import type { Photo } from '$lib/types/supabase.interface';
	import CardGridMiniCard from './CardGridMiniCard.svelte';

	export let cards: Photo[] = [];
	export let allCards: { id: number; tier: number }[] = [];
</script>

<div class="grid sm:grid-cols-5 grid-cols-3 sm:gap-10 gap-3 h-2/3">
	{#each allCards.sort((card1, card2) => {
		const card2Value = card2.tier * 1000 + card2.id;
		const card1Value = card1.tier * 1000 + card1.id;
		return card2Value - card1Value;
	}) as cardInfo}
		<CardGridMiniCard card={cards.find((card) => card.id === cardInfo.id)} tier={cardInfo.tier} />
	{/each}
</div>
