<script lang="ts">
	export let href: string = '#';

	let rainbow = false;
</script>

<a
	class="text-4xl anim-rainbow animate-rainbow bg-clip-text text-transparent bg-black duration-75"
	{href}
	on:mouseover={() => (rainbow = true)}
	on:mouseleave={() => (rainbow = false)}
	on:focus={() => (rainbow = true)}
	class:rainbow-gradient={rainbow}
>
	<slot />
</a>

<style>
	.rainbow-gradient {
		background-image: linear-gradient(
			to left,
			#ec4899,
			#d946ef 14%,
			#a855f7 28%,
			#8b5cf6 42%,
			#6366f1 56%,
			#3b82f6 70%,
			#0ea5e9 84%
		);
	}
</style>
