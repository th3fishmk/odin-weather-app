import type { Root as WeatherData } from "./interfaces/weaterInterfaces";
import "./style.css";

const key = "";
const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/2026-05-09?unitGroup=metric&key=${key}&contentType=json`;

console.log(query);
async function getData() {
	try {
		const response = await fetch(query);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const result = (await response.json()) as WeatherData;
		console.log(result);
		console.log(result.description);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
}
getData();
