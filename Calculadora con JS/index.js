const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
// `

const display = new Display(displayValorAnterior, displayValorActual);

//Por cada boton que pase lo siguiente
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => 
        display.agregarNumero(boton.innerHTML));
        //que display agregue un numero y este numero es el que tiene 
        //en su interior el elemento HTML 
});


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
