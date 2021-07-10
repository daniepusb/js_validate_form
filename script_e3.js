
let cant__nombres   = 0
let array__nombres  = []
let flag            = false

function mostrarNombres(){
    //buscar todos los nombres y guardarlos en array_nombres
    //por cada nombre mostrar en DIV resultado
    array__nombres      = document.getElementsByClassName("nombres");
    let ul__resultado   = document.getElementById("resultado")
    
    for (let index = 0; index < array__nombres.length; index++) {
        console.log( array__nombres[index].value )

        let new__li     = document.createElement("li")
        let new__span   = document.createElement("span")
        let new__span__value   = document.createTextNode(array__nombres[index].value)
        
        new__span.appendChild(new__span__value)
        new__li.appendChild(new__span)
        ul__resultado.appendChild(new__li)
    }

}

/* funcion para obtener el numero que insertó el usuario y así poder crear los inputs para los nombres */
function guardarNumero(){
    cant__nombres = parseInt( document.getElementById("primer__numero").value ,10)
    console.log("cant__nombres: ", cant__nombres)
    if (validarCantidadInicial() ){
        crearInputsNombres()
    }
}

/* Funcion que crea N cantidad de inputs para ingresar los nombres según cant_nombres*/
function crearInputsNombres(){
    //obtenemos el div donde colocaremos los inputs para los nombres
    let div__nombres = document.getElementById("nombres")
    //borramos su contenido
    div__nombres.innerHTML= ""
    
    // con un ciclo vamos a crear elementos inputs y agregarlos al div__nombres
    for (let index = 0; index < cant__nombres; index++) {
        //creamos el elemento input
        let tag__input = document.createElement("input");
        //configuramos la clase y el tipo de input(text)
        tag__input.className = "nombres";
        tag__input.type = "text";
        //creamos el elemento br
        let tag__br = document.createElement("br");
        //agregamos el input y el salto del linea al div__nombres
        div__nombres.appendChild(tag__input);
        div__nombres.appendChild(tag__br);
    }
}

/* funcion para validar por segunda vez que el usuario inserte un valor entre 3 y 10 */
function validarCantidadInicial(){
    flag = false
    if (cant__nombres >2 && cant__nombres<11 ) flag = true
    return flag
}

/*funcion para hacer la preparación inicial, incluyendo el comportamiento onclick en los botones*/
function cargaInicial(){
    let btn__guardar            = document.getElementById("guardar__eleccion");

    btn__guardar.addEventListener("click", function(event){
        event.preventDefault();
        guardarNumero();
    });
}

cargaInicial();