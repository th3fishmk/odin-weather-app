import type { Root as WeatherData } from "./interfaces/weatherInterfaces";
import "./style.css";

const date = new Date();
const fullDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate()}`;

const date_input = document.getElementById("date-only") as HTMLInputElement;

if (date_input) {
	date_input.value = fullDate;
}

const check_button = document.getElementById("fetchData") as HTMLButtonElement;

if (check_button) {
	check_button.addEventListener("click", (e) => {
		e.preventDefault();
		validateData();
	});
}

async function validateData() {
	const outputSpace = document.getElementById("data-space") as HTMLDivElement;
	if (outputSpace) {
		outputSpace.innerHTML = ``;
		console.log(`cleared!`);
		outputSpace.innerHTML = `Please wait...`;
	}

	const city_input = document.getElementById("city_name") as HTMLInputElement;
	const city = city_input.value.trim();
	const date = date_input.value;
	const key_input = document.getElementById("forecastAPI") as HTMLInputElement;
	const key = key_input.value.trim();
	let query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date}?unitGroup=metric&key=${key}&contentType=json`;

	query = encodeURI(query);

	console.log(query);

	fetch(query)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			const fetchedData = response as WeatherData;
			const html = `
        <h2> ${fetchedData.days[0].datetime} in ${fetchedData?.address}</h2>
        <p>${fetchedData?.description}</p>
        <div class="box">
          <div>
            <div>temp:</div>
            <div>${fetchedData?.days[0].temp}</div>
          </div>
          <div>
            <div>feels like</div>
            <div>${fetchedData?.days[0].feelslike}</div>
          </div>
          <div>
            <div>rain prob:</div>
            <div>${fetchedData?.days[0].precipprob}</div>
          </div>
          <div>
            <div>snow fall:</div>
            <div>${fetchedData?.days[0].snowdepth}</div>
          </div>
        </div>
        `;
			if (outputSpace) {
				outputSpace.innerHTML = html;
			}
		})
		.catch((err) => {
			if (err instanceof Error) {
				console.log(err);
				outputSpace.innerHTML = `
                <h2>There is an error on your request: ${err.message} </h2>
                `;
			}
		});
	// try {
	// 	const response = await fetch(query);
	// 	if (!response.ok) {
	// 		throw new Error(`Response status: ${response.status}`);
	// 	}
	// 	return (await response.json()) as WeatherData;
	// } catch (error) {
	// 	if (error instanceof Error) {
	// 		console.error(error.message);
	// 	}
	// 	alert("Error!");
	// }
}
// const fetchedData = await getData();
