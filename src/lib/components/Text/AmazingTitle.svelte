<script lang="ts">
</script>

<h1 class="text-6xl anim-rainbow rainbow-gradient animate-rainbow bg-clip-text text-transparent">
	<slot />
</h1>

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
