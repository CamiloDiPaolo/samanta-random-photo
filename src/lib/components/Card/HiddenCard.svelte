<script lang="ts">
	export let spin: boolean = false;
	export let animationDuration: number = 1;
</script>

<button
	class="h-96 w-64 border border-stone-800 p-20 rounded-xl flex justify-center items-center bg-white/50 relative backdrop-blur-lg shadow-lg hover:cursor-pointer hover:-translate-y-3 hover:rotate-3 duration-75"
	on:click
	class:animate-discover-card-1={spin}
	style:animation-duration={`${animationDuration}s`}
>
	<p class="text-[200px] relative z-10">?</p>
</button>
