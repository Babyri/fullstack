// let text = "marcuuussss" , text2= "marcas";

// if (text.charAt(0)===text2.charAt(0)){
//     console.log("si tienen las mismas letras");
// } else{
//     console.log("no tienen las miismas letras");
// }


// if (text.charAt(0) == text2.charAt(0) 
//      && 
//      text.charAt(1) == text2.charAt(1)){
//         console.log("Son iguales")
//      }
// let abc = "abc";
// let palabra = "el abecedario empieza por abc si no lo sabias eres tonto";

// if (palabra.search(/[abc]/) == palabra.charAt(0) && (palabra.search(/[abc]/)== palabra.charAt( palabra.length -1)))
//  {
//     console.log("sta flama");
    
// } else {
//     console.log("no sta flama");
    
// }
// const palindromo = "aibofobia";
// let inverso = "";

// for (let i = palindromo.length -1; i >=0; i--) {
    
//     inverso += palindromo.charAt(palindromo.length-1);
// }

// if(palindromo==inverso) {
//     console.log("la variable palindromo:" + palindromo + "es correcta")

// } else{
//     console.log("la variable palindromo:" + palindromo + "es un palurdo")
// }

// const coches = ["ferrari, bugatti,coche de pocoyo"]
// for (let coche of coches) {
//     document.write(coche);
//     document.write("br");
// }

// let programas = ["html","css"];

// document.write("<hr>");
// programas.push("python","java","javascript")
// document.write("array inicial de programas" + programas);
// document.write("<hr>");
// document.write("pop " + programas.pop());

// let coloress =  ["amarillo", "azul", "rojo"]

// let coloresss3 = [];

// for (color of coloress) {
//     coloresss3.push(color);
//     console.log(color);
// }
// console.log(coloresss3);
// Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar,multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver elresultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.
// const sumarSimple = (param1,param2) => param1 + param2;
// console.log(sumarSimple(6,3));   
const sumar = (pe, ne, callback) => {
callback(pe + ne);
};
const callback = (resultado) => {
    console.log(resultado);
}
sumar(3,4,callback);