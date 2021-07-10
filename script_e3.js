//Variables globales
const ul__resultado   = document.getElementById("resultado")
let primer__numero  = 0
let segundo__numero = 0
let total           = 0
let operacion       = ""
let seleccion       = ""

/* Mostrar total en resultado */
function mostrarResultado(){
    ul__resultado.innerHTML = 
        "El resultado de la operación " 
        + operacion 
        + " entre los números "
        + String(primer__numero) + " y "
        + String(segundo__numero) 
        + " es igual a " 
        + String(total)
}


/* funcion para multiplicar los dos numeros y guardar en total*/
function restar(){
    total = primer__numero - segundo__numero
    mostrarResultado()
}


/* funcion para multiplicar los dos numeros y guardar en total*/
function multiplicar(){
    total = primer__numero * segundo__numero
    mostrarResultado()
}


/* funcion para sumar los dos numeros y guardar en total*/
function sumar(){
    total = primer__numero + segundo__numero
    mostrarResultado()
}

/* funcion para obtener la opcion que se eligió: suma, resta o multiplicacion */
function guardarSeleccion(){
    seleccion = document.getElementById("seleccion")
    operacion = seleccion.selectedOptions[0].value
    
    primer__numero  = parseInt( document.getElementById("primer__numero").value, 10)
    segundo__numero = parseInt( document.getElementById("segundo__numero").value, 10)

    if (operacion == "suma"){
        sumar()
    }else if (operacion == "resta"){
        restar()
    }else if (operacion == "multiplicacion"){
        multiplicar()
    }else{
        //mostrar posible error
        return false
    }
}



/*funcion para hacer la preparación inicial, incluyendo el comportamiento click en el boton*/
function cargaInicial(){
    let btn__guardar = document.getElementById("ejecutar__seleccion");
    btn__guardar.addEventListener("click", function(event){
        event.preventDefault();
        guardarSeleccion();
    });
}

cargaInicial();