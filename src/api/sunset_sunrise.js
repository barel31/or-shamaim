export default async function getSunsetSunrise(date) {
    const res = await fetch(`https://api.sunrise-sunset.org/json?lat=31.4117257&long=35.0818155&date=${date}`)
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
        });
    return {
        sunrise: res.results.sunrise,
        sunset: res.results.sunset,
    };
}
