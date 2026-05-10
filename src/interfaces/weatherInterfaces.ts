export interface HoursItem {
	datetime: string;
	datetimeEpoch: number;
	temp: number;
	feelslike: number;
	humidity: number;
	dew: number;
	precip: number;
	precipprob: number;
	snow: number;
	snowdepth: number;
	preciptype: null;
	windgust: number;
	windspeed: number;
	winddir: number;
	pressure: number;
	visibility: number;
	cloudcover: number;
	solarradiation: number;
	solarenergy: number;
	uvindex: number;
	severerisk: number;
	conditions: string;
	icon: string;
	stations: string[];
	source: string;
}

export interface DaysItem {
	datetime: string;
	datetimeEpoch: number;
	tempmax: number;
	tempmin: number;
	temp: number;
	feelslikemax: number;
	feelslikemin: number;
	feelslike: number;
	dew: number;
	humidity: number;
	precip: number;
	precipprob: number;
	precipcover: number;
	preciptype: null;
	snow: number;
	snowdepth: number;
	windgust: number;
	windspeed: number;
	winddir: number;
	pressure: number;
	cloudcover: number;
	visibility: number;
	solarradiation: number;
	solarenergy: number;
	uvindex: number;
	severerisk: number;
	sunrise: string;
	sunriseEpoch: number;
	sunset: string;
	sunsetEpoch: number;
	moonphase: number;
	conditions: string;
	description: string;
	icon: string;
	stations: string[];
	source: string;
	hours: HoursItem[];
}

export interface EGWU {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}

export interface EGLC {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}

export interface EGLL {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}

export interface D5621 {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}

export interface F6665 {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}

export interface Stations {
	EGWU: EGWU;
	EGLC: EGLC;
	EGLL: EGLL;
	D5621: D5621;
	F6665: F6665;
}

export interface CurrentConditions {
	datetime: string;
	datetimeEpoch: number;
	temp: number;
	feelslike: number;
	humidity: number;
	dew: number;
	precip: number;
	precipprob: number;
	snow: number;
	snowdepth: number;
	preciptype: null;
	windgust: number;
	windspeed: number;
	winddir: number;
	pressure: number;
	visibility: number;
	cloudcover: number;
	solarradiation: number;
	solarenergy: number;
	uvindex: number;
	conditions: string;
	icon: string;
	stations: string[];
	source: string;
	sunrise: string;
	sunriseEpoch: number;
	sunset: string;
	sunsetEpoch: number;
	moonphase: number;
}

export interface Root {
	queryCost: number;
	latitude: number;
	longitude: number;
	resolvedAddress: string;
	address: string;
	timezone: string;
	tzoffset: number;
	description: string;
	days: DaysItem[];
	alerts: unknown[];
	stations: Stations;
	currentConditions: CurrentConditions;
}
