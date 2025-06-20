
// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach

let personajes = ['Mario','Luigi','Bowser','Toad','Peach','star']

console.log(personajes)


console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
console.log(personajes[3])
console.log(personajes[4])

console.log('EFICIENTE')
for(i=personajes.length -1 ; i >= 0; i--){
    console.log(personajes[i])
}











let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let numbers2 = [1,2,3]

console.log(numbers)
// i =  i + 1 ======> i++
// i =  i + 3 ======> i+=3
for(i=0; i < 20; i+=3){
    console.log(numbers[i])
}




let personajesBuenos = []
for(i=0; i < personajes.length;i++){
    if(personajes[i] != 'Bowser'){
        personajesBuenos.push(personajes[i])
    }
}


console.log(personajes)
console.log(personajesBuenos)

// let personajesFiltrados = personajes.filter( (personaje)=> personaje != 'Bowser')
console.log(personajes.filter( (personaje)=> personaje != 'Bowser'))


console.log(numbers)
console.log(numbers.filter( (number)=> number != 7 ))
console.log(numbers.filter( (number)=> number % 3 == 0 ))
console.log(numbers.filter( (number)=> number > 7 ))
console.log(numbers.filter( (number)=> number < 15 ))

console.log(numbers.filter( (number)=> number > 7 && number < 15 ))

let newNumbers = []
// i = 0 =====> 
for(i = 0 ;i <= 19 ;i++){
    console.log(numbers[i] * 4)
    newNumbers.push(numbers[i] * 4)
}

console.log(numbers)
console.log(newNumbers)

// let mapNumbers = numbers.map( (item)=> item * 4)

console.log(numbers)
console.log(numbers.map( (item)=> item * 4))

















console.log(personajes)
console.log(personajes.map( (personaje)=> personaje + "s" ))


personajes.forEach( (item)=>{
    console.log(item)
})

// 5,10 , 15 ,20

numbers.forEach( (item)=>{
    console.log('se ejecuto el proceso')
    if(item%5 ==0){

        console.log(item)
    }
})

for(i=4; i < numbers.length;i+=5){
    console.log('se ejecuto el proceso')
    console.log(numbers[i])
}
 console.log('DO WHILE')
let j = 20
do{
    console.log(j)
    j++
}while(j < 10)