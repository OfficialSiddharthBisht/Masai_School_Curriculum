//https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=8de5e9c39aafbc7b74ea212a574046ba


async function getWeather(searchedCity){
    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=8de5e9c39aafbc7b74ea212a574046ba`);

    var details = await data.json();

    // console.log(details);
    if(details.cod=='404'){
    document.getElementById('cardFull').innerHTML='';
    alert('city not found');
    }
    else{
        showcard(details);
    }
    // showcard(details)
}

function findWeather(){
    var searchedCity = document.getElementById('searchBar').value;
    // console.log(searchedCity)
    getWeather(searchedCity);
    document.getElementById('searchBar').value='';
}

function showcard(details){
    document.getElementById('cardFull').innerHTML='';
    var div=document.createElement('div');
    div.id='card';
    
    var image=document.createElement('img');
    image.id='image';

    if(details.weather[0].description=='clear sky'){
        image.setAttribute('src','./sun.png');
    }
    else{
        image.setAttribute('src','./cloud.png');
    }

    var name = document.createElement('h2');
    name.id='name';
    name.innerText=details.name;

    var temp = document.createElement('p');
    temp.id='temp'
    temp.innerText="Temperature : "+details.main.temp;

    var pressure = document.createElement('p');
    pressure.id='pressure';
    pressure.innerText="Pressure : "+details.main.pressure;

    var humidity = document.createElement('p');
    humidity.id='humidity';
    humidity.innerText="Humidity : "+details.main.humidity;

    var windSpeed = document.createElement('p');
    windSpeed.id='windSpeed'
    windSpeed.innerText="Wind Speed : "+details.wind.speed;

    var sunrise = document.createElement('p');
    sunrise.id='sunrise'
    sunrise.innerText="Sunrise : "+details.sys.sunrise;

    var sunset = document.createElement('p');
    sunset.id='sunset';
    sunset.innerText="Sunset : "+details.sys.sunset;


    var weather = document.createElement('p');
    weather.id='weather';
    weather.innerText='Weather : '+details.weather[0].description;

    div.append(image, name, temp, pressure, humidity, windSpeed, sunrise, sunset, weather);
    document.querySelector('#cardFull').append(div);

    
    // console.log(name, temp, pressure, humidity, windSpeed, sunrise, sunset, weather);
}