const express= require('express'); //inyeccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

// app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title> </head> 
     <body> <h1>Hola mundo </h1> 
     </body> </html>`)
});

app.get('/person/:id',(req,res)=>{
    // res.render('nombre de la vista',parametros);
    res.render('person',{Name: req.params.id, Message: req.query.message,Times: req.query.times});
});

app.get('/student', (req, res) => {
    res.render('index');
});

app.post('/student', express.urlencoded({ extended: false }),(req, res) => {
    res.send(`First Name es: ${req.body.fname}, 
    Last Name es: ${req.body.lname}`);
    // res.send(req.body)
});

app.listen(PORT);

// let x={ID: req.params.id, 
//        Qstr: req.query.qrst};

// app.get('/person/:id',(req,res)=>{
//     res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> <h1>Hola mundo ${req.params.id} </h1></body> </html>`)
//     res.render('person',{ID: req.params.id, Qstr: req.query.qrst});
// });



// app.use('/', (req,res,next)=>{
//     console.log('Requested URL:', req.url);
//     next();
// })



// app.get('/person/:id',(req,res)=>{
//     res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> <h1>Hola mundo ${req.params.id} </h1></body> </html>`)
//     res.render('person',{ID: req.params.id, Qstr: req.query.qrst});
// });
















// const express= require('express');
// let app = express();
// let PORT = process.env.PORT || 3000;

// app.use('/assets',express.static(__dirname+ '/public'))
// app.get('/',(req,res)=>{
//     res.send(`<!DOCTYPE html> <html lang="en"> <head> 
//     <link type="text/css" rel="stylesheet" href="/assets/style.css"><meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h1>Hola mundo </h1> </body> </html>`);
// });

// app.get('/person/:id',(req,res)=>{
//     res.send(`<!DOCTYPE html> <html lang="en"> <head>
//     <link type="text/css" rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h1>Person ${req.params.id} </h1></body> </html>`);
// });

// app.listen(PORT);