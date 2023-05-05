<script lang="ts">
	import { onMount } from 'svelte';
	export let src: string;

	let loaded = false;

	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
	});
</script>

{#if loaded}
	<img {src} class="h-96 rounded-xl" alt="samanta card" />
{:else}
	<p class="text-[200px] relative z-10 h-96 w-[216px]">!</p>
{/if}
