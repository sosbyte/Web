require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// uso de HBS(handlebars) renderizar `para reutilizar codigo
// diferenciar Modelo VIsta COntrolador
app.set('view engine', 'hbs');
// para uso de parciales
hbs.registerPartials(__dirname + '/views/partials');

// midelware 
//Servir contenido estático
app.use(express.static('public'))

// contenido dinamico
//app.get('/', (req, res) => {
//    res.send('Página Principal')
//});
// en carpeta views archivo home
// paso parámetros al hbs y los recojo con{{}}
//RENDERIZAR
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos MM',
        titulo: 'curso de Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Carlos MM',
        titulo: 'curso de Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Carlos MM',
        titulo: 'curso de Node'
    });
});
// si generic lo llamo sin .html busca con html
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');

});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});
// comodin
app.get('*', (req, res) => {
    // envio como sendFile, no como send
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`El ejemplo está escuchando a http://localhost:${port}`);
});