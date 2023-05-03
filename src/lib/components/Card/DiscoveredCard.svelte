<script lang="ts">
	export let spin: boolean = false;
	export let animationDuration: number = 1;
	export let tier: 1 | 2 | 3 | 4 = 4;
	export let showTier: boolean = false;
</script>

<div
	class="relative"
	class:animate-discover-card-2={spin}
	style:animation-duration={`${animationDuration}s`}
>
	<button
		class="z-10 h-96 w-64 border border-stone-800 p-20 rounded-xl flex justify-center items-center bg-white/50 relative backdrop-blur-lg shadow-lg duration-75"
		on:click
	>
		<p class="text-[200px] relative z-10">!</p>
	</button>
	<!-- SHADOW -->
	<div
		class="rounded-lg bg-gradient-to-br animate-rainbow-fast absolute top-0 left-0 w-full h-full z-0"
		class:shadow-tier-1={tier === 1 && showTier}
		class:shadow-tier-2={tier === 2 && showTier}
		class:shadow-tier-3={tier === 3 && showTier}
		class:shadow-tier-4={tier === 4 && showTier}
	/>
</div>

<style lang="postcss">
	.shadow-tier-1 {
		/* @apply from-indigo-400 via-purple-400 to-pink-400 blur-2xl; */
	}
	.shadow-tier-2 {
		@apply from-teal-400 via-green-400 to-lime-400 blur-xl;
	}
	.shadow-tier-3 {
		@apply from-indigo-400 via-purple-400 to-pink-400 blur-xl;
	}
	.shadow-tier-4 {
		@apply from-red-400 via-orange-400 to-yellow-400 blur-3xl;
	}
</style>
