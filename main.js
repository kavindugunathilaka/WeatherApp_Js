const api = {
    key: "afaf9f8d48cff6cafd32e23220bcfdbf",
    baseurl : "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather =>{
        return weather.json();
    }).then(displyResults);
}

function displyResults (weather){
    console.log(weather);
}