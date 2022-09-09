var latitud;
var longitud;
var clima;
const apiKey = "e057a3267eb1d9f4d181534ef0b17fdd";

function getWeather(){
	latitud = parseFloat(document.getElementById("latitud").value);
	longitud = parseFloat(document.getElementById("longitud").value);
	var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitud+"&lon="+longitud+"&appid="+apiKey;
	console.log(latitud);
	console.log(longitud);
	var request = new XMLHttpRequest();
	request.onload = function(resp)
	{
		console.log(resp);
		console.log(resp.target.responseText);
		clima = JSON.parse(resp.target.responseText);
		var res = document.getElementById("clima");
		res.innerHTML = parseFloat(clima.main.temp) - 273.15.toFixed(2)+"°C";

	}

request.open("GET", url, true);
request.send();
}



