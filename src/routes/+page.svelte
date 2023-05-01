<script lang="ts">
	import type { PageServerData } from './$types';
	import Frame from '$lib/components/Frame.svelte';
	import Info from '../lib/components/Info.svelte';
	import RefreshButton from '$lib/components/RefreshButton.svelte';

	export let data: PageServerData;

	let photo = data.photo;

	const refreshPhoto = () => {
		photo = data.photos
			.filter((photoNew) => photoNew.id !== photo.id)
			.at(
				generateRandomNumber(data.photos.filter((photoNew) => photoNew.id !== photo.id).length)
			) as any;
		console.log(photo);
	};

	const generateRandomNumber = (max: number) => Math.floor(Math.random() * max);
</script>

<main
	class="w-screen h-screen flex justify-center items-center bg-white flex-col gap-10 bg-gradient-to-br from-indigo-200 to-pink-200"
>
	<h1 class=" text-4xl font-bold font-mono text-center">Random Samanta picture generator</h1>
	{#if !photo}
		<p>Cargando foto</p>
	{:else}
		<Frame src={photo.url} />
		<Info title={photo.title} />
		<RefreshButton on:click={refreshPhoto} />
	{/if}
</main>
