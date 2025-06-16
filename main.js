console.log('hoal desde mainjs')

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


// for(inicializacion;condicion;actualización){}
// i = 0 , 0 <= 5 ======> 0
// i = 1 , 1 <= 5 ======> 1
// i = 2 , 2 <= 5 ======> 2
// i = 3 , 3 <= 5 ======> 3
// i = 4 , 4 <= 5 ======> 4
// i = 5 , 5 <= 5 ======> 5
// i = 6 , 6 <= 5 

for( i = 0; i < 5;i++){
    console.log(i + 1)
}






for(i = 20;i >= 15; i--){
    console.log(i)
    
}

// i++ =====> i= i + 1
// i-- =====> i= i - 1
//i+=5. =====> i = i + 5
for(i=30;i <= 50;i = i + 5){
    console.log(i)
}

let nombres = ['dakota johnson','jena ortega','scarlet johanson']

console.log(nombres)
nombres.push('henry cavil')
console.log(nombres)


const alumnos = ['nicolas','elkin','luis']

console.log(alumnos)
alumnos.push('yilfri')
console.log(alumnos)

// length.        1.     2.        3
let frutas = ['igo','sandia','frutilla', 'coco', 'uva', 'mango']
// index,posiiton. 0.      1.       2

console.log(frutas)
console.log(frutas[1])

frutas.push('mango')
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.unshift('naranja')
console.log(frutas)

frutas.splice(1,1)
console.log(frutas)

frutas.splice(1,1)
console.log(frutas)


frutas.splice(2,1)
console.log(frutas)


frutas = [ "naranja", "frutilla", "coco", "uva", "mango" , 'fresa']
console.log(frutas)
console.log('QUEMADO')
console.log(frutas[5] + 's')
console.log(frutas[4] + 's')
console.log(frutas[3] + 's')
console.log(frutas[2] + 's')
console.log(frutas[1] + 's')
console.log(frutas[0] + 's')


console.log('DINAMICO')

console.log(frutas)
for(i = frutas.length -1; i >= 0;i--){
    console.log(frutas[i] + 's')
}
