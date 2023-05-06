<script>
	import '../app.css';
</script>

<main
	class="w-screen h-screen flex justify-center items-center bg-white flex-col gap-10 bg-g2 overflow-y-scroll"
>
	<slot />
</main>

<style lang="postcss">
	.bg-g {
		@apply bg-gradient-to-br from-indigo-200 to-pink-200;
	}

	.bg-g1 {
		@apply bg-gradient-to-br from-[#D5D0E5] to-[#F3E6E8];
	}

	.bg-g2 {
		@apply bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100 via-slate-100 to-sky-200;
	}
</style>
