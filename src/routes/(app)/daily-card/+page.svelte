<script lang="ts">
	import type { PageData } from './$types';
	import { Icon, HandRaised } from 'svelte-hero-icons';
	import SamantaCard from '$lib/components/Card/SamantaCard.svelte';
	import sessionStore from '$lib/stores/session';

	export let data: PageData;

	let photo = data.photo;
	let showGrabButton = false;

	const grabPhoto = async () => {
		console.log($sessionStore);
	};
</script>

{#if !photo}
	<p>Cargando foto</p>
{:else}
	<SamantaCard
		cardInfo={photo}
		on:card-discover={() => {
			showGrabButton = true;
		}}
	/>
	{#if showGrabButton}
		<button
			class="bg-white shadow-lg rounded-full p-5 hover:text-fuchsia-500 hover:-translate-y-1"
			on:click={grabPhoto}
		>
			<Icon src={HandRaised} class="w-10" />
		</button>
	{/if}
{/if}

<style lang="postcss">
	.bg-g {
		@apply bg-gradient-to-br from-indigo-200 to-pink-200;
	}

	.bg-g1 {
		@apply bg-gradient-to-br from-[#D5D0E5] to-[#F3E6E8];
	}

	.bg-g2 {
		@apply bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100 via-slate-100 to-sky-200;
	}
</style>
