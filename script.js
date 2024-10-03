
//4f0bc6214fae49b7f79d48b2be20174e

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('image');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day =  dateObj.getUTCDate() -1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

/* const cityName = "London";
const apiKey = "4f0bc6214fae49b7f79d48b2be20174e"; */

const getWeather = async () =>{
   
    try{
        const cityName = document.getElementById('searchBara').value;
        const weatherFetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"4f0bc6214fae49b7f79d48b2be20174e"}&units=metric`,{
            headers : {
                Accept: "application/json"
            }

        });

        const weatherData = await weatherFetchData.json();
        console.log(weatherData)
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        temp.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        tempImg.innerHTML = `<h2> ${Math.round(weatherData.main.temp)} °C</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max} °C`;
        tempMin.innerHTML = `${weatherData.main.temp_min} °C `;
      

    } catch(error){
        console.log(error);

    }
}

getWeather();
