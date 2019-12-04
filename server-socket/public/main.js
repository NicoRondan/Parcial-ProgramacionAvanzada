

//Del lado del cliente
var socket = io.connect('http://localhost:8000', { 'forceNew': true });

socket.on('datos', function(data) {
	console.log(data);
});


//funcion que muestra los datos en el html
function render(data) {
   
    var html = (`<div>
                 <strong> DT: ${JSON.stringify(data.dt)}</strong>
                 <br>
                 <strong> TIEMPO: </strong>
                 <br>
                 <em> Temperatura: ${JSON.stringify(data.weather.temp)}</em>
                 <br>
                 <em> Presion: ${JSON.stringify(data.weather.pressure)}</em>
                 <br>
                 <em> Humedad: ${JSON.stringify(data.weather.humidity)}</em>
                 <br>
                 <em> Temperatura minima: ${JSON.stringify(data.weather.temp_min)}</em>
                 <br>
                 <em> Temperatura maxima: ${JSON.stringify(data.weather.temp_max)}</em>
                 <br>
                 <em> Nivel del mar: ${JSON.stringify(data.weather.sea_level)}</em>
                 <br>
                 <em> Nivel de tierra: ${JSON.stringify(data.weather.grnd_level)}</em>
                 <br>
                 <strong> VIENTO: </strong>
                 <br>
                 <em> Velocidad: ${JSON.stringify(data.wind.speed)}</em>
                 <br>
                 <em> Deg: ${JSON.stringify(data.wind.deg)}</em>
                 <br>
                 <strong> NUBES: ${JSON.stringify(data.clouds.all)}</strong>
        </div>`);
    
    document.getElementById('datos').innerHTML = html;
}

//Llamamos a la funcion
socket.on('datos', function(data) {
	render(data);
});