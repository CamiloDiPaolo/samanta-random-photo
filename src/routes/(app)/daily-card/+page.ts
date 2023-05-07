import type { PageLoad } from './$types';
import supabase, { getCard } from '$lib/supabase';
import { getSession, getDailyCard, getRandomCard } from '$lib/supabase';
import type { DailyCard, Photo } from '$lib/types/supabase.interface';

export const ssr = false;

export const load: PageLoad<{ photo: Photo; millisecondsToNextCard?: number }> = async () => {
	const session = await getSession();
	const dailyCards = await getDailyCard(session?.user.id as string);

	if (!dailyCards || dailyCards.length === 0) return { photo: await getRandomCard() };

	const newerDailyCard = dailyCards
		.sort((dailyCard1, dailyCard2) => {
			const date1 = new Date(dailyCard1.date);
			const date2 = new Date(dailyCard2.date);
			return date2.getTime() - date1.getTime();
		})
		.at(0) as DailyCard;

	const currentDate = new Date();
	const newerCardDate = new Date(newerDailyCard.date);

	const ONE_MINUTES_IN_MILLISECONDS = 1 * 60 * 1000;

	const lastCardUnderFiveMinutes =
		currentDate.getTime() - newerCardDate.getTime() < ONE_MINUTES_IN_MILLISECONDS;

	if (lastCardUnderFiveMinutes)
		return {
			photo: await getCard(newerDailyCard.photo_id),
			millisecondsToNextCard: currentDate.getTime() - newerCardDate.getTime()
		};

	return {
		photo: await getRandomCard()
	};
};
