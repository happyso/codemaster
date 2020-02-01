const COORDS = 'coords';
const API_KEY = '0379b8a898c23dfc42986e26bb8718a0';
const weather = document.querySelector(".js-weather");

function getWeather(lat,lng){
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    fetch(WEATHER_URL).then(
        function(response){
            return response.json();
        }).then(
            function(json){
                const temperature = json.main.temp;
                const place = json.name;
                weather.innerText = `${temperature} @ ${place}`;
                console.log(json);
            })
}

function saveCoords(obj){
    localStorage.setItem(COORDS, JSON.stringify(obj));
}
function getError (){
    console.log('error');
}
function geoSucess (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoObject = {
        latitude,
        longitude
    };
    saveCoords(geoObject);
    getWeather(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(geoSucess, getError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords  = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();