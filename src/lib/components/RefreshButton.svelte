<script lang="ts">
	import { Icon, ArrowPath } from 'svelte-hero-icons';
</script>

<button
	on:click
	class="w-10 h-10 rounded-full flex justify-center items-center border border-purple-400 hover:-translate-y-1 duration-75 hover:bg-purple-50 bg-white"
>
	<Icon src={ArrowPath} class="w-5 h-5 text-purple-400" />
</button>
