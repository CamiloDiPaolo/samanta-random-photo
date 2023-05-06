import { getCollection, getCompleteCollection, getSession } from '$lib/supabase';
import type { Photo } from '$lib/types/supabase.interface';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const session = await getSession();
	const catalog = await getCollection(session?.user.id as string);
	const completeCatalog = await getCompleteCollection();

	const catalogParsed: Photo[] = [];
	if (catalog)
		catalog.forEach((resObject: any) => {
			catalogParsed.push(resObject.photo_id);
		});

	return {
		catalog: catalogParsed,
		completeCatalog: completeCatalog as { id: number; tier: number }[]
	};
};
