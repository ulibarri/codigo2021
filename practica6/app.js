let obj ={
    nombre: 'Carlos',
    apellido: 'Ulibarri',
    edad: 44,
    mouseOver : ()=>{return console.log('Hola desde mouseOver');},
    keyPress : ()=>{return console.log('Hola desde keyPress')}
}

console.log(obj);
console.log(`Tu nombre es: ${obj.nombre} ${obj.apellido}`);
console.log(`Tu nombre es: ${obj['nombre']} ${obj['apellido']}`);

let myKey = 'nombre';

console.log(`Tu nombre es: ${obj[myKey]} `); //accedo a la hey mediante una variable

myKey='apellido';
console.log(`Tu apellido es: ${obj[myKey]} `);

myKey='mouseOver';
obj[myKey]();

myKey='keyPress';
obj[myKey]();

let myArray=[];

// myArray.push(4);
// myArray.push("Hola desde el array");
// myArray.push(obj);
// myArray.push(()=>{return console.log('Hola desde la funcion del array')});

// console.log(myArray);
// console.log(myArray[2].nombre);
// myArray[2].keyPress();
// myArray[3]();

myArray.push(()=>{return console.log('Hola desde la funcion 1')});
myArray.push(()=>{return console.log('Hola desde la funcion 2')});
myArray.push(()=>{return console.log('Hola desde la funcion 3')});
myArray.push(()=>{return console.log('Hola desde la funcion 4')});

// myArray[3]();

myArray.forEach((item)=>{
    item();
});



