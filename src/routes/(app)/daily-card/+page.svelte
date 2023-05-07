<script lang="ts">
	import type { PageData } from './$types';
	import { Icon, HandRaised, ArrowPath } from 'svelte-hero-icons';
	import sessionStore from '$lib/stores/session';
	import { addCardToCollection, addScore, setDailyCard, updateLeaderboard } from '$lib/supabase';
	import SamantaCard from '$lib/components/Card/SamantaCard.svelte';
	import Timer from '$lib/components/Card/Timer.svelte';
	import { identity } from 'svelte/internal';
	import AmazingTitle from '$lib/components/Text/AmazingTitle.svelte';

	export let data: PageData;

	let photo = data.photo;

	let millisecondsToNextCard = data.millisecondsToNextCard;
	let minutesCounter = 0;
	let secondsCounter = 0;

	let showReloadButton = false;

	const cardDiscover = async () => {
		await setDailyCard($sessionStore.user.id, photo?.id as number);
		await addCardToCollection($sessionStore.user.id, photo.id);
		await addScore($sessionStore.user.id, photo.tier);
		await updateLeaderboard($sessionStore.user.id);

		showReloadButton = false;
		const ONE_MINUTES_IN_MILLISECONDS = 1 * 60 * 1000;
		millisecondsToNextCard = ONE_MINUTES_IN_MILLISECONDS;
		initTimer();
	};

	const initTimer = () => {
		if (!millisecondsToNextCard) return;

		const ONE_MINUTES_IN_SECONDS = 1 * 60;

		let secondsUntilNextCard = Math.floor(millisecondsToNextCard / 1000);

		const intervalId = setInterval(() => {
			secondsUntilNextCard += 1;

			const timeUntilNextCardInSeconds = ONE_MINUTES_IN_SECONDS - secondsUntilNextCard;

			minutesCounter = Math.floor(timeUntilNextCardInSeconds / 60);
			secondsCounter = Math.floor(timeUntilNextCardInSeconds % 60);

			if (minutesCounter <= 0 && secondsCounter <= 0) {
				clearInterval(intervalId);
				showReloadButton = true;
			}
		}, 1000);
	};

	if (millisecondsToNextCard) initTimer();
</script>

{#if !photo}
	<p>Cargando foto</p>
{:else}
	<AmazingTitle>Samanta Card</AmazingTitle>
	<SamantaCard
		cardInfo={photo}
		on:card-discover={cardDiscover}
		showDiscoveredCard={millisecondsToNextCard ? true : false}
	/>
	{#if showReloadButton}
		<button
			class="bg-white shadow-lg rounded-full p-5 hover:text-fuchsia-500 hover:-translate-y-1"
			on:click={() => {
				location.reload();
			}}
		>
			<Icon src={ArrowPath} class="w-10" />
		</button>
	{/if}
	{#if millisecondsToNextCard && !showReloadButton && secondsCounter != 0}
		<Timer minutes={minutesCounter} seconds={secondsCounter} />
	{/if}
{/if}

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
