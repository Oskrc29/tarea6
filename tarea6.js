/*  TAREA 6 Mostrar en consola la secuencia de Fibonacci: */
/* Sección a  Entre los números 0 y 1000.  */
// Creo funcion
function secuenciaFibonacci(limit) {
    let secuencia = [];
    let a = 0, b = 1;
    
    for (let i = 0; a <= limit; i++) {
        secuencia.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return secuencia;
}

// creo una variable con la secuencia
let resultado = secuenciaFibonacci(1000);

// Muestro resultados
console.log("Secuencia de Fibonacci entre 0 y 1000:");
console.log(resultado);

/* FIN */ 
/************************************************************************/

/* Sección B Números pares entre 0 y 1000.*/
//creo funcion
function buscoNumerosPares() {
    const numerosPares = [];
    for (let i = 0; i <= 1000; i += 2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

// creo una variable con la secuencia
const resultadoPar = buscoNumerosPares();
// Muestro resultados
console.log("Números pares entre 0 y 1000: ");
console.log(resultadoPar);

/* FIN */ 
/************************************************************************/
/* Sección C Números impares entre 0 y 1000*/

//creo funcion
function buscoNumerosImpares() {
    const numerosImpares = [];
    for (let i = 1; i <= 1000; i += 2) {
        numerosImpares.push(i);
    }
    return numerosImpares;
}

// creo una variable con la secuencia
const resultadoImpar = buscoNumerosImpares();
// Muestro resultados
console.log("Números Impares entre 0 y 1000: ");
console.log(resultadoImpar);

/* FIN */ 
/************************************************************************/
/* TAREA 6 */
/* Nro. 2: Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.*/

// creo mi arreglo
let pokemonMayu = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

// creo funcion
function convertirMayusculas(arr) {
    return arr.map(poke => poke.toUpperCase());
}

// Llamo función y mostrar el resultado
let pokemonMayusculas = convertirMayusculas(pokemonMayu);
console.log("Arreglo para convertir en mayusculas: ");
console.log(pokemonMayusculas);


/* FIN */ 
/************************************************************************/
/* TAREA 6 */
/* Nro 3: Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego. */

// creo mi arreglo
let pokemonFue = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

// creo funcion
function obtenerPokemonTipoFuego(arr) {
    return arr.filter(poke => poke.tipo.toLowerCase() === 'fuego');
}

// Llamo la función y muestro resultados
let pokemonFuego = obtenerPokemonTipoFuego(pokemonFue);
console.log("Arreglo para obtener pokemones de tipo fuego: ");
console.log(pokemonFuego);


/* FIN */ 
/************************************************************************/

