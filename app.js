
//First, Get coords via inherent geolocation API

function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');
//Set mapLink as blank string
  mapLink.href = "";
  mapLink.textContent = "";
//execute on successful/consented IP lookup
  function success(position) {
//Get lat/lng from inherent API
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

//String lat/lng through ANOTHER api to get city data
    mapLink.href = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+latitude+"&longitude="+longitude+"&localityLanguage=en";
    const url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+latitude+"&longitude="+longitude+"&localityLanguage=en";
//Once you have lat/lng defined, you can send another request to the second API parsing the city data
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint const
request.open('GET', url, true)
//Get parsed data on pageload
request.onload = function () {
   var data = JSON.parse(this.response)
   var city = data.city;
   //Success alert!
   alert('Congrats, tinDog is available in your area of ' + city + '!');
}

// Send request
request.send()


  }
//Function if user hits decline :(
  function error() {
    status.textContent = 'Unable to retrieve your location';
  }
//If you are somehow,some way, on something older than IE10
  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {

    navigator.geolocation.getCurrentPosition(success, error);
  }

}


//add listener function to run geoLocate
document.querySelector('#find-me').addEventListener('click', geoFindMe);
