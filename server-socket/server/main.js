
//Definicion del objeto json
let objeto = {
    "dt": 153197443,
    "weather": {
        "temp": 285.524,
        "pressure": 1021.39,
        "humidity": 100,
        "temp_min": 285.524,
        "temp_max": 285.524,
        "sea_level": 1031.04,
        "grnd_level": 1021.39    
    },
    "wind": {
        "speed": 11.58,
        "deg": 262.5
    },
    "clouds": {
        "all": 0
    }
}

let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
//indico la ruta de ficheros estáticos
app.use(express.static('public'));


server.listen(8000, function() {
	console.log('Servidor corriendo en http://localhost:8000');
});

//Envio el objeto
io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
    socket.emit('datos', objeto);
});

