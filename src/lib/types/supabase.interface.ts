export interface Photo {
	id: number;
	created_at: string;
	title: string;
	url: string;
	tier: number;
}

export interface DailyCard {
	id: number;
	created_at: string;
	uid: string;
	photo_id: number;
	date: string;
}
