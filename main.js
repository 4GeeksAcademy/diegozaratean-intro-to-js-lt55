// hacer un app que calcule el impuesto si ganas menos de 1000 debes imprimir "debes pagar el 5%"
// si ganas mas de 1000 debes imprimir "debes pagar el 10%", el sueldo esta defnido 


// PSEUDOCODIGO
// definir mi variabel de sueldo
let sueldo = 100
// let mensaje = ''
// if(sueldo < 1000){
//     mensaje = "debes pagar el 5%"
// }else{
//     mensaje ="debes pagar el 10%"
// }

// ternary operator
// if(condicion){
    // si es true
    //}else{
        // si es false que ghagio
        //}
        
// (condicion) ? si es true: si es false ; 
let mensaje =  sueldo < 1000 ? "debes pagar el 5%" :  "debes pagar el 10%"
console.log(mensaje)

document.getElementById('content').insertAdjacentHTML(
    'beforeend',
    `<p>ya te voy a decir $100</p> <b>${mensaje}</b>`
)


