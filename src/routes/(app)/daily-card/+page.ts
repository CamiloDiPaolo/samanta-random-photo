import type { PageLoad } from './$types';
import supabase from '$lib/supabase';

type Photo = {
	id: number;
	created_at: string;
	title: string;
	url: string;
};

export const ssr = false;

export const load: PageLoad<{ photo: Photo; photos: Photo[] }> = async () => {
	const { data, error } = await supabase.from('photos').select('*');

	if (error) throw new Error('ocurrio un error cargando la foto de samanta');

	const photo = data.at(generateRandomNumber(data.length)) as Photo;
	const photos = data as Photo[];
	return { photo, photos };
};

const generateRandomNumber = (max: number) => Math.floor(Math.random() * max);
