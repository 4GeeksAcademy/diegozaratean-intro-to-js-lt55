

let persona = {
    nombre: 'german',
    apellido: 'perez',
    edad: 32,
    skills: ['js','python','react'],
    "lugar de naciemiento": 'springfild',
    programar: function(){
        console.log('estoy programando')
    }
}

let arrayEjemplo = ['german','perez',32]
















///  Perro, nombre, color, edad, ladrar wow
let perro = {
    nombre: 'luna',
    color: 'blanco con negro',
    edad: 1,
    ladrar: function(){
        console.log('Wow soy ' )
    }

}



/// Agregar una funcion que cambie el texto y el color de fonod del titulo, cunado le douy click a un boton
// PSEUDOCODIGO
// DONE: hacer una funcion
function modificarTitulo(){
    let colores = ['red','green','yellow','violet','aqua']
    let nombres = ['luis','elkin','Ayelen','Yilfri','Nicolas','Johan']
    document.querySelector('#title').innerText = nombres[Math.ceil( Math.random()*nombres.length) - 1]
    document.getElementById('title').style.backgroundColor= colores[Math.floor(Math.random() * colores.length ) ]
}
// modificarTitulo()
// DONE: agergar un boton
// DONE:cuando le de click al boton hacer algo





/// seleccione aletoriamente un color y un nombre de dos listas(arrays) y se los asigne al titulo




// una app que se encarge de lanzar dos dados por emdio d eun boton
// PSEUDOCODIGO
// graficar los dados
function lanzarDados(){
    document.getElementById('dado1').innerText =  Math.ceil( Math.random() * 6) 
    document.getElementById('dado2').innerText =  Math.ceil( Math.random() * 6) 
}
lanzarDados()
