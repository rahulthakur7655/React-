let input = document.querySelector("#Cityname")
let click = document.querySelector("#click")
click.addEventListener('click',(e)=>{
    async function getWeather() {
  const apiKey = "35159ffbc0e85a371ea0416a240a0922"
   const cityName  = `${input.value}`
  const res = await fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&id=524901&appid=${apiKey}`
  );
 
  const data = await res.json();
  console.log(data)
  let city = document.querySelector(".city")
  let icon = document.querySelector(".icon")
  let temp = document.querySelector(".temp")
  let desc = document.querySelector(".desc")
city.innerHTML= data.name

let fun =data.weather[0].main
function checkWeather() {
  if (fun === "Clear") {
    return "☀️ ";
  } 
  else if (fun === "Clouds") {
    return "☁️";
  } 
  else if (fun === "Rain") {
    return "🌧️ ";
  } 
  else if (fun === "Snow") {
    return "❄️ ";
  } 
  else {
    return "🌫️ ";
  }
}

icon.innerHTML = `<b>${checkWeather() }</b>`

temp.innerHTML= `${(data.main.temp - 273.15).toFixed(0)}°C`

let dayNumber = new Date().getDay(); 
let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid Day";
}
desc.innerHTML= dayName
let times = document.querySelector(".time")
let time = new Date()
times.innerHTML = `${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()},${time.getHours()}:${time.getMinutes()}`
}
getWeather();
})
let date = new Date()
console.log(date)