


// transportar
// argumentos
// function transportar(origen,destino){
//     console.log('saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('llegando a ' + destino)
// }

// transportar('casa','gym')
// transportar('gym','ofi')
// transportar('ofi','casa')


// SCOPE
// let nombre = 'Bob esponja'
// console.log('Antes de la función' + nombre)

// function saludarAlumno(nombre ){
//     console.log('dentro de la función' + nombre)
//     console.log('hola ' +  nombre)
// }
// console.log('despues de la función' + nombre)
// saludarAlumno('Yilfri')

// function sumar(a,b){
//     console.log('suma')
//     return a + b
// }

// console.log(sumar(2,3))

// función admitido e un bar
// function admitido(edad){
//     if(edad > 17){
//         console.log('hola4')
//         return'puedes entrar'
//         console.log('hola1')
//     }else{
//         console.log('hola3')
//         return 'tienes que esperar'
//         console.log('hola2')
//     }
// }

// console.log(admitido(15))

// caularTax el 20%
function calcularTax(income){
    return income * 0.2
}


document.getElementById('tax').innerText = calcularTax(100)


// function sume(a,b){
//     return  a + b
// }

// console.log(sume(2,2)) // 4
// console.log(sume(2,5)) // 7
// console.log(sume(8,0)) // 8
// console.log(sume(6,3)) // 9

// console.log('ANTES window onload')
// window.onload = function(){
//     console.log('Se ejecuto window onload')
// }
// console.log('DESPUES window onload')

// FUNCIONES DECLARATIVAS
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('saludoDeclarativo')
}


// FUNCIONES DE EXPRESI´ON
const saludoExpresion = function(){
    console.log('saludoExpresion')
}
saludoExpresion()

// FUNCIONES DE FLECHA ARROW
const saludoFlecha = ()=>{
    console.log('saludoFlecha')
    //this
}
saludoFlecha()


//// REFACTORING

/// PSEUDOCODIGO
// desarrollar un generador de excusas de Quien, Cuando, Que , Donde
// 1. modificar html desde js
// 2. tomar un arraqy de Quien y de forma aletoria traer un elemento
// 3. tomar un arraqy de Cuando y de forma aletoria traer un elemento
// 4. tomar un arraqy de Que y de forma aletoria traer un elemento
// 5. tomar un arraqy de Donde y de forma aletoria traer un elemento
// 6. tomar los elementos aletorios y formas una frase
// 7. darle estilos