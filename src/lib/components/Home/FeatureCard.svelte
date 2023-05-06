<script lang="ts">
	import type { IconSource } from 'svelte-hero-icons';
	import { Icon } from 'svelte-hero-icons';

	export let icon: IconSource;
	export let title: string;
	export let description: string;
</script>

<div
	class="flex flex-col rounded-md p-4 shadow-lg justify-start items-center bg-white md:w-96 w-56 text-center gap-1"
>
	<Icon src={icon} class="text-fuchsia-500 w-10 h-10" />
	<h1 class="text-2xl text-fuchsia-950 font-extrabold">{title}</h1>
	<p class="text-fuchsia-300 font-bold text-md">{description}</p>
</div>
