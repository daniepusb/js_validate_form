//Variables globales
let es__par         = true
let flag            = false
let index__MAX      = 100
let index__MIN      = 1
let index__array    = 0
let array__valores  = []
let ul__resultado   = document.getElementById("resultado")

/* Mostrar valores guardados en array__valores */
function mostrarValores(){
    for (let index = 0; index < array__valores.length; index++) {
        let new__li         = document.createElement("li")
        new__li.innerHTML   = array__valores[index]
        
        ul__resultado.appendChild(new__li)
    }
}


/* Buscar todos los valores pares entre index__MIN y index__MAX y guardarlos en array__valores */
function buscarPares(){
    index__array    = 0
    
    for (let index = index__MIN; index < index__MAX; index++) {
        console.log(index)
        if (esMultiploDeCinco(index) && esPar(index) ){
            array__valores[index__array]=index
            index__array++
        }
    }
    mostrarValores()
}


/* Buscar todos los valores impares entre index__MIN y index__MAX y guardarlos en array__valores */
function buscarImpares(){
    index__array    = 0
    
    for (let index = index__MIN; index < index__MAX; index++) {
        console.log(index)
        if (esMultiploDeCinco(index) && esImpar(index) ){
            array__valores[index__array]=index
            index__array++
        }
    }
    mostrarValores()
}

/* funcion para obtener la opcion que se eligió: par o impar */
function guardarSeleccion(e){
    console.log(e)
    let seleccion = document.getElementsByName("seleccion")
    console.log(seleccion[0])
    console.log(seleccion[1])
    
    if (es__par) {buscarPares()}
    else{buscarImpares()}
}


/* funcion para validar si un numero es PAR */
function esPar(numero){
    flag = false
    if ( numero > 0 && numero % 2 == 0) flag = true
    return flag
}


/* funcion para validar si un numero es IMPAR */
function esImpar(numero){
    flag = false
    if ( numero > 0 && numero % 2 != 0) flag = true
    return flag
}


/* funcion para validar si un numero es multiplo de 5, ademas si está entre 1 y 100 */
function esMultiploDeCinco(numero){
    flag = false
    if ( numero > 0 && numero % 5 == 0 && numero < 101 ) flag = true
    return flag
}


/*funcion para hacer la preparación inicial, incluyendo el comportamiento click en el boton*/
function cargaInicial(){
    let btn__guardar = document.getElementById("guardar__eleccion");
    btn__guardar.addEventListener("click", function(event){
        event.preventDefault();
        guardarSeleccion(event);
    });
}

cargaInicial();