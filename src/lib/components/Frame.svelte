<script lang="ts">
	export let src: string;
	const alt: string = 'photo of samanta';
</script>

<div class="bg-transparent p-2 rounded-md relative flex justify-center">
	<div
		class="rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 animate-text blur-2xl absolute top-0 left-0 w-full h-full z-0"
	/>
	<img {src} {alt} class="w-64 rounded-lg z-10 relative" />
</div>
