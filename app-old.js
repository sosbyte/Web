const http = require('http');

// req=request(peticion a recurso) res=response(respuesta)
http.createServer((req, res) => {
    // Respuesta desde al servidor
    // console.log(req);
    // // indico que el contenido es un adjunto guardar como
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // // indico qu la op.correcta 200 y envío texto plano
    // res.writeHead(200, {
    //     // 'text/plain' 'application/jason'
    //     'Content-Type': 'application/csv'
    // });
    // //const persona = {
    // //        id: 1,
    // //        nombre: 'Carlos'
    // //    }
    // //he de pasar el dato como un string
    // res.write('id, nombre');
    // res.write('1, nom1');
    // res.write('2, nom2');
    // res.write('3, nom3');
    // res.write('4, Carlos');
    // res.end(); //para decir al navegador que he acabado
    res.write('hola mundo');
    res.end();
})


.listen(8080);
// para levantar la aplicación en el puerto xx


console.log('Escuchando el puerto', 8080);