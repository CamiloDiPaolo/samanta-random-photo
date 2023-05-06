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
	<p class="sm:text-[200px] text-[170px] relative z-10 sm:h-96 sm:w-[214px] h-72 w-[200px]">!</p>
{/if}
