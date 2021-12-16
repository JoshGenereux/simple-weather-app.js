const apiKey = '654fd8a4a1b4f11da672f6373e89f8bd'

window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimeZone = document.querySelector('.location-timezone')
    let picture = document.querySelector('.pic')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude


            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`)
                .then(function (response) {
                console.log(response.data);
                const {timezone} = response.data
                const {temp, weather} = response.data.current;
                const {description, icon} = weather[0];
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = description;
                locationTimeZone.textContent = timezone;
                weatherIcon(response, icon)

            }).catch(function (error) {
                console.error(error);
            });
        })
    }

    const weatherIcon = (response, iconId)=>{
        axios.get(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
            .then(response =>{
                picture.setAttribute('src', `http://openweathermap.org/img/wn/${iconId}@2x.png`)
                console.log(response)
            })
    }
})
