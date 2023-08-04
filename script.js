const cityInput=document.getElementById('city-name');
const weatherInfo=document.getElementById('weather-info');
// const city=document.getElementById('city-name').value;
document.getElementById('weather-button').addEventListener('click',function(){

    if(document.getElementById('city-name').value==""){
        alert("Enter City Name");
    }else{
        const city=cityInput.value.trim();
        const apiKey='1c0e0d93c64c6d9a2ebe534db2750aa7';
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>{
            const temprature=data.main.temp;
            const description=data.weather[0].description;
            const windSpeed=data.wind.speed;
            const humidity=data.main.humidity;
            
            document.getElementById('city-detail').innerHTML=`${city.toUpperCase()}`;
            document.getElementById('detail-temprature').innerHTML=`Temprature : ${temprature} &deg;C`;
            document.getElementById('detail-description').innerHTML=`Description : ${description}`;
            document.getElementById('detail-windspeed').innerHTML=`Wind Speed : ${windSpeed} m/s`;
            document.getElementById('detail-humidity').innerHTML=`Humidity : ${humidity} %`;
        })
    }
});