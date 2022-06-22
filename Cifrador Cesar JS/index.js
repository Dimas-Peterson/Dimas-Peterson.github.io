const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango  = document.getElementById('rango');


const shifMessage = () => {
    //obtenemos input original y transformar a mayuscula
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

//Esta es una funcion "Recursiva", se llama a si misma una y otra vez.
const printChar = (currentLetterIndex, wordArray) => {
    //caso base, que corta la recursividad para que no sea infinita
    //Si el largo del array es igual al index actual, se termina
    if(wordArray.length === currentLetterIndex) return;
    //A partir de aca es todo para darle una animacion
    inputOriginal.value = inputOriginal.value.substring(1)
    //creamos un <span> 
    const spanChar = document.createElement("span");
    //agregamos al resultado
    resultado.appendChild(spanChar);
    animateChar(spanChar) //usamos then porque solo una vez ejecutada la animacion completa, incriptamos la letra
        .then(() => {
            //Caracter en el que nos encontramos actualmente en el array
            const charSinCodificar = wordArray[currentLetterIndex];
            //Se inserta en el html, se pregunta si esta incluido, se verifica si esta en el alfabeto
            /**en caso de que estemos en la Z debe volver a empezar y por eso se aplica el "%" modulo, estando en la posicion 26 que es la "z" el modulo de 27 va a *ser igual a 1, ese numero va a ser el nuevo indice. la letra z pasa a ser A para incriptar
            */
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : charSinCodificar

            //Volvemos al principio, empieza la recursividad.
            printChar(currentLetterIndex + 1, wordArray);
        })

    
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    //retornamos una promesa porque queremos que se termine de ingresar las letras y despues se muestre
    return new Promise(resolve => {
        //ejecuta un fragmento de code de forma repetitiva en un cierto intervalo de tiempo, en este caso 50 ms
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            //cabmiosDeLetra, 3 esta bien, si son mas se hace muy lento.
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}


/**
 * indicamos al elemento html el resultado
 * con prevenDefault, evitamos el comportamiento por defecto de submit que tiene el formulario
 */
const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;