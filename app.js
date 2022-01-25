const searchInput = document.querySelector(".search input").value;

fetch('https://api.openweathermap.org/data/2.5/weather?q=pavlohrad&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then((res) => {return res.json()})
.then((data) => {
    console.log(data);
    document.querySelector('.image').innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">`;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg' + 'C';
    document.querySelector('.feels-like').innerHTML = 'Feels like:' + ' ' + Math.round(data.main.feels_like) + '&deg' + 'C';
    document.querySelector('.description').textContent = data.weather[0].description;
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.humidity').innerHTML = 'Humidity:' + ' ' + (data.main.humidity) + ' ' + '%';
    document.querySelector('.pressure').innerHTML = 'Pressure:' + ' ' + (data.main.pressure) + ' ' + 'hPa';
    document.querySelector('.wind').innerHTML = 'Wind:' + ' ' + (data.wind.speed) + ' ' + 'km/h';
})


