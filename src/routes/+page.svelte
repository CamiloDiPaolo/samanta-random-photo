<script lang="ts">
	import FeatureCard from '$lib/components/Home/FeatureCard.svelte';
	import AmazingLink from '$lib/components/Text/AmazingLink.svelte';
	import AmazingTitle from '$lib/components/Text/AmazingTitle.svelte';
	import { CircleStack, ShoppingBag, Trophy } from 'svelte-hero-icons';

	const featuresArr = [
		{
			title: 'Colecciona cartas',
			description:
				'Colecciona todas las cartas de Samanta para completar la coleccion y reclamar la recompensa!',
			icon: ShoppingBag
		},
		{
			title: 'Competi',
			description:
				'Suma puntos y usalos para perjudicar a otras personas y escalar en la tabla de posiciones!',
			icon: Trophy
		}
	];
</script>

<AmazingTitle>Samanta's Card Game</AmazingTitle>
<div class="flex gap-10 md:flex-row flex-col justify-center">
	{#each featuresArr as { title, description, icon }}
		<FeatureCard {title} {description} {icon} />
	{/each}
</div>
<AmazingLink href="/daily-card">Comenzar!</AmazingLink>
