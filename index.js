const path = require('path');
    //"dev": "nodemon index.js"

const express = require('express');

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(require('./archives/public/comboboxDisenio')); //cuando intento agregar estos archivos no funciona

/*
// Routes
app.use(require('./routes/index'));

app.use('/public', express.static( 'public'));      //esto agrega todo lo que es css y js
app.use('/generador.html', express.static( 'generador.html'));      //esto agrega todo lo que es css y js
*/

app.get('/' , (request, response) => {

    response.send("HOLA MUNDO")

});
const port = process.env.PORT || 4000;

app.listen(port);
console.log('Server on port', port);
