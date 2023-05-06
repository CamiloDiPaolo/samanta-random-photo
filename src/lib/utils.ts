import type { TimeType } from './types/utils.types';

export const generateRandomNumber = (max: number) => Math.floor(Math.random() * max);
export const parseStringTimeToSeconds: (time: TimeType) => number = (time: TimeType) =>
	Number(time.split(':')[0]) * 3600 + Number(time.split(':')[1]) * 60 + Number(time.split(':')[2]);
