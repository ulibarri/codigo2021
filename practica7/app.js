const Emitter = require('events'); //inyectar la dependencia
let emitr = new Emitter(); //generar la instancia del objeto

emitr.on ('greet', ()=>{ console.log ('En algun lugar, alguien dijo hola')}); //0
emitr.on ('greet', ()=>{ console.log ('UN SEGUNDO SALUDO DESDE OTRO LUGAR')}); //1
emitr.on ('greet', ()=>{ console.log ('UN tercer SALUDO DESDE OTRO LUGAR')}); //2

emitr.on ('jump', ()=>{ console.log ('alguien ha brincado 1')}); //0
emitr.on ('jump', ()=>{ console.log ('alguien ha brincado 2')}); //1
emitr.on ('jump', ()=>{ console.log ('alguien ha brincado 3')}); //2
emitr.on ('jump', ()=>{ console.log ('alguien ha brincado 4')}); //3

emitr.emit('greet');
emitr.emit('jump');
console.log(emitr);







// 
