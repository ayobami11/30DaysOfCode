let userInput = document.getElementById('user-input');
let submitBtn = document.getElementById('submit-btn');
let instruction = document.getElementById('instruction');

let city = document.querySelector('#city');
let country = document.querySelector('#country');
let description = document.querySelector('#description');
let temp = document.querySelector('#temperature');
let humidity = document.querySelector('#humidity');
let pressure = document.querySelector('#pressure');

// Event handler which obtains and displays the data when the submit button is clicked
submitBtn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=ded26aa9b5c8621f76d43faf7802f245&units`)
    .then(response => response.json())
    .then(data => {
        instruction.innerHTML = '';
        let cityValue = data.name;
        let countryValue = data.sys.country;
        let tempValue = data.main.temp;
        let descriptionValue = data.weather[0].description;
        let humidityValue = data.main.humidity;
        let pressureValue = data.main.pressure;

        // Displays the data
        city.innerHTML = cityValue;
        country.innerHTML = countryValue;
        temp.innerHTML = `Temperature: ${tempValue}&#8457`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`;
        pressure.innerHTML = `Pressure: ${pressureValue} Pa`;
        description.innerHTML = `Description: ${descriptionValue}`;
    })

    .catch(error => instruction.innerHTML = 'Please enter a valid city.')
})
