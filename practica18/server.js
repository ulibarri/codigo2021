const express= require('express'); //inyeccion de la dependencia
const mongoose = require('mongoose');
const person = require('./models/person');
let app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico


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

      const connectDB = async () => {
        try {
            await mongoose.connect(`mongodb+srv://admin:admin@beducluster.eiuzk.mongodb.net/TEST?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
              // const Book = mongoose.model('PERSONS', schema);
              person.find({ nombre: 'CARLOS ULIBARRI IRETA' })
              .then(persons => console.log('PERSONAS ENCONTRADAS',persons))
              .catch(err => console.error(err));
            

           
  


            console.log('MongoDB connected!!');
        } catch (err) {
            console.log('Failed to connect to MongoDB', err);
        }
    };
    
    connectDB();
    // res.render('table');
});
//enviamos como parametro extra, el callback, para que se ejecute 
//antes que el route handler
app.post('/student', express.urlencoded({ extended: false }),(req, res) => {
    res.send(`First Name es: ${req.body.fname}, 
    Last Name es: ${req.body.lname}`);
    // res.send(req.body)
});
//enviamos como parametro extra, el callback, para que se ejecute 
//antes que el route handler
app.post('/personjson', express.json({type: '*/*'}),(req, res) => {
	console.log('EL objeto contiene:' , (req.body));
	console.log('Nombre:' ,req.body.firstname);
	console.log('Apellido:' ,req.body.lastname);
});


app.listen(PORT);



// app.get('/person/:id/delete',(req,res)=>{
// });
// app.get('/student/:id/delete',(req,res)=>{
// });

// app.get('/person/:id/update',(req,res)=>{
// });
// app.get('/persons',(req,res)=>{
// });
// app.get('/students',(req,res)=>{
// });

//REST  : REPRENSENTATIONAL STATE TRANSFER 
// Estilo arquitectonico para construir API
//HTML Verbs and URL's mean something
app.get('/person/:id',(req,res)=>{
 //get a given person
});

app.get('/student/:id', (req, res) => {
//get a given student
});

app.post('/student', express.urlencoded({ extended: false }),(req, res) => {
//save student
});
app.post('/person', express.json({type: '*/*'}),(req, res) => {
    //save student
    });

app.delete('/student/:id',(req, res) => {
//delete student
});