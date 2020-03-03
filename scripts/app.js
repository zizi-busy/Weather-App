//GET DATA FROM INPUT FIELD

const form = document.querySelector ('form')
const card = document.querySelector ('.card');
const info = document.querySelector ('.information');
const timeOfDay = document.querySelector ('img.time')
const icon = document.querySelector ('.icon img ')
const body = document.querySelector('body')

//3._____________________
const updateUI = (data) =>{
    /*  destructure cityInfo and weather
    const cityInfo = data.cityInfo;
    const weather = data.weather;*/

    const {cityInfo,weather} = data // get properties cityInfo and weather from data object
    console.log(data)
    //update information template
    info.innerHTML = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `;

    //4. update icon & time images
    const iconSource =`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSource)


    let timeSrc = null;
    if (weather.IsDayTime){
        timeSrc = 'img/day.png';
        
    }else{
        timeSrc = 'img/night.png';
      
    }
    timeOfDay.setAttribute('src', timeSrc )
}

//2._____________________
const updateCity = async (city) => {
    const cityInfo = await getCity (city);
    const weather = await getWeather (cityInfo.Key) // key for that city

    return {cityInfo, weather};// object shorthand notation
};

//1._____________________
form. addEventListener('submit', e => {
    e.preventDefault();
 //get city value
    const location = form.city.value.trim() //trim empty spaces
    form.reset (); //clears up the form 

    //update UI with new city

    updateCity(location)
    .then(data => updateUI(data));
})



