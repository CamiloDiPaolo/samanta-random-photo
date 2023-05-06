<script lang="ts">
	export let number = 0;
	export let tier = 1;
</script>

<div class="relative">
	<button
		class="bg-gradient-to-br z-10 border border-stone-800 p-2 sm:rounded-xl rounded-md flex justify-center items-center relative backdrop-blur-sm shadow-lg duration-75 sm:text-[25px] text-[12px] sm:w-20 sm:h-24 h-10 w-6"
		class:shadow-tier-1={tier === 1}
		class:shadow-tier-2={tier === 2}
		class:shadow-tier-3={tier === 3}
	>
		{number}
	</button>
	<!-- <div
		class="rounded-lg bg-gradient-to-br animate-rainbow-fast absolute top-0 left-0 w-full h-full z-0"
	/> -->
</div>

<style lang="postcss">
	.shadow-tier-1 {
		@apply from-teal-400 via-green-400 to-lime-400;
	}
	.shadow-tier-2 {
		@apply from-indigo-400 via-purple-400 to-pink-400;
	}
	.shadow-tier-3 {
		@apply from-red-400 via-orange-400 to-yellow-400;
	}
</style>
