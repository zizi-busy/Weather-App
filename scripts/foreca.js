
const key = '682500PcukwQUtq1UDd6XimUfAmBA5HL'

//GET WEATHER API CALL -Current conditions API   
const getWeather = async (locationID) => {
    const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/' // location ID comes at the end of this url
    const request = `${locationID}?apikey=${key}`
    const response = await fetch (weatherUrl + request);
    const data = await response.json ()

   return data[0]//there are more cities with thes same name. Get the first one with [0]
} 

//GET CITY API CALL- to get a key code and pass it into the "getWeather()"
const getCity = async (city) => { 
    
    const citiesUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const request = `?apikey=${key}&q=${city}` // "apikey" and "q" from accuweather 

    const response = await fetch (citiesUrl + request) ; // this returns the promise and we need to turn that into data using json
    const data = await response.json ()
   
    return data [0]
}

/*  getCity('zagreb')
    .then (data => {
        return getWeather(data.Key) //pass "Key:" from location object
    }).then(data => {
        console.log(data)
    })
 */
 



