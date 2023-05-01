import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';

type Photo = {
	id: number;
	created_at: string;
	title: string;
	url: string;
};

export const load: PageServerLoad<{ photo: Photo; photos: Photo[] }> = async () => {
	const supabase = createClient(PUBLIC_SUPABASE_URL as string, PUBLIC_SUPABASE_ANON_KEY as string);

	const { data, error } = await supabase.from('photos').select('*');

	if (error) throw new Error('ocurrio un error cargando la foto de samanta');

	const photo = data.at(generateRandomNumber(data.length)) as Photo;
	const photos = data as Photo[];
	return { photo, photos };
};

const generateRandomNumber = (max: number) => Math.floor(Math.random() * max);
