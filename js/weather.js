const API_KEY = "6a154b382391c1c660aea8bc3189fb04"

const onGeoOk = async (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const { name, main: { temp }, weather } = await (await fetch(url)).json();
    const weatherSpan = document.querySelector('#weather span:first-child')
    const citySpan = document.querySelector('#weather span:last-child')
    weatherSpan.innerText = name;
    citySpan.innerText = `${weather[0].main} / ${temp}`;

}
const onGeoError = () => {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);