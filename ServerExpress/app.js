const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile("C:/xampp/tomcat/webapps/ROOT/ServerExpress/index.html");
});

app.get('/hola', (req, res) => {
    var nombre = req.query.nombre;
    var apellidos = req.query.apellidos;
    res.end(`
			<h1>
                Hola ${nombre} ${apellidos} 
			</h1>
	`)
});

app.listen(9090, () => {
    console.log('server running on port', 9090);
});