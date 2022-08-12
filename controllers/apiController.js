const fetch = require('node-fetch');
const API_KEY = '7b8d6c56df292d95f816f38d57ddd444'

async function GetWeatherCity(req, res) {
    console.log(req.query);
    let name = req.query.city;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`).then(resp => resp.json()).then(data => res.send(data))
}

async function GetForecastCity(req, res) {
    console.log(req.query);
    let name = req.query.city;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${API_KEY}`).then(resp => resp.json()).then(data => res.send(data))
}

async function GetdailyData(req, res) {
    console.log(req.query);
    let lat = req.query.lat;
    let lon = req.query.lon;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric&appid=${API_KEY}`)
        .then(resp => resp.json()).then(data => res.send(data))
}

module.exports = { GetWeatherCity, GetForecastCity, GetdailyData }