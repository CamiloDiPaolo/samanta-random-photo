<script lang="ts">
</script>

<h1 class="text-6xl anim-rainbow rainbow-gradient animate-rainbow bg-clip-text text-transparent">
	<slot />
</h1>

<style>
	.rainbow-gradient {
		background-image: linear-gradient(
			to left,
			red,
			orange 14%,
			yellow 28%,
			green 42%,
			blue 56%,
			purple 70%,
			violet 84%
		);
	}
</style>
