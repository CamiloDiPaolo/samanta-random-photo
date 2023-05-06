import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import { generateRandomNumber } from './utils';
import type { DailyCard, Photo } from './types/supabase.interface';

const supabase = createClient(PUBLIC_SUPABASE_URL as string, PUBLIC_SUPABASE_ANON_KEY as string);

export const getSession = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session) return null;

	// is user data is store then store it
	const { data: dataUser, error }: any = await supabase
		.from('users')
		.select('*')
		.eq('uid', session.user.id);

	if (!dataUser || dataUser.length === 0) {
		await supabase.from('users').insert({
			username: session.user.user_metadata.name,
			uid: session.user.id
		});
	}

	return session;
};

export const googleOAuth = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			queryParams: {
				access_type: 'offline',
				prompt: 'consent'
			}
		}
	});
};

export const getDailyCard: (uid: string) => Promise<DailyCard[]> = async (uid: string) => {
	const { data, error } = await supabase.from('dailyCardForUser').select('*').eq('uid', uid);

	return data as DailyCard[];
};

export const setDailyCard = async (uid: string, photoId: number) => {
	await supabase.from('dailyCardForUser').insert({
		uid,
		photo_id: photoId,
		date: new Date()
	});
};

export const getRandomCard: () => Promise<Photo> = async () => {
	const random = Math.random();
	const cardTier = random < 0.07 ? 3 : random < 0.2 ? 2 : 1;
	const { data, error } = await supabase.from('photos').select('*').eq('tier', cardTier);

	if (error) throw new Error('ocurrio un error cargando la carta');

	const photo = data.at(generateRandomNumber(data.length)) as Photo;
	return photo;
};

export const getCard: (id: number) => Promise<Photo> = async (id: number) => {
	const { data, error } = await supabase.from('photos').select('*').eq('id', id);
	return data?.at(0) as Photo;
};

export const addCardToCollection = async (uid: string, photoId: number) => {
	const { data, error } = await supabase
		.from('collection')
		.select('*')
		.eq('uid', uid)
		.eq('photo_id', photoId);

	if (!data || data?.length === 0)
		await supabase.from('collection').insert({ uid, photo_id: photoId });
};

export const updateLeaderboard = async (uid: string) => {
	const session = await getSession();
	const collection = await getCollection(uid);

	const { data, error } = await supabase.from('leaderboard').select('*').eq('uid', uid);

	if (!data || !data[0]) {
		await supabase.from('leaderboard').insert({
			uid,
			picture: session?.user.user_metadata.picture,
			username: session?.user.user_metadata.name,
			tier_3: collection.filter((photo_id: any) => photo_id.photo_id.tier === 3).length,
			tier_2: collection.filter((photo_id: any) => photo_id.photo_id.tier === 2).length,
			tier_1: collection.filter((photo_id: any) => photo_id.photo_id.tier === 1).length
		});
	} else {
		await supabase
			.from('leaderboard')
			.update({
				picture: session?.user.user_metadata.picture,
				username: session?.user.user_metadata.name,
				tier_3: collection.filter((photo_id: any) => photo_id.photo_id.tier === 3).length,
				tier_2: collection.filter((photo_id: any) => photo_id.photo_id.tier === 2).length,
				tier_1: collection.filter((photo_id: any) => photo_id.photo_id.tier === 1).length
			})
			.eq('uid', uid);
	}
};

export const getLeaderboard = async () => {
	const { data, error } = await supabase.from('leaderboard').select('*');
	return data;
};

export const addScore = async (uid: string, photoTier: number) => {
	const scoreToAdd = photoTier === 3 ? 10 : photoTier === 2 ? 5 : 1;
	const { data, error } = await supabase.from('users').select('*').eq('uid', uid);

	if (!data || !data[0]) return;

	await supabase
		.from('users')
		.update({ score: data[0].score + scoreToAdd })
		.eq('uid', uid);
};

export const getCollection = async (uid: string) => {
	const { data, error }: any = await supabase
		.from('collection')
		.select('photo_id(*)')
		.eq('uid', uid);
	return data;
};

export const getCompleteCollection = async () => {
	const { data, error } = await supabase.from('photos').select('id, tier');
	return data;
};

export default supabase;
