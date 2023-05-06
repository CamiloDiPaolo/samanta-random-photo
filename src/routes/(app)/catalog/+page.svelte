<script lang="ts">
	import CardGrid from '$lib/components/CardCollection/CardGrid.svelte';
	import AmazingTitle from '$lib/components/Text/AmazingTitle.svelte';
	import type { Photo } from '$lib/types/supabase.interface';
	import type { PageData } from './$types';

	export let data: PageData;

	const cards = data.catalog;
	const allCards = data.completeCatalog;

	console.log(data);
</script>

<AmazingTitle>Collection</AmazingTitle>
<CardGrid {cards} {allCards} />
