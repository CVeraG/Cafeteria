
//Esperar que la pagina cargue
if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',ready)
}
else{ready();}

function ready(){
    //Agregar funcionalidad al boton mas
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }
    //Agregar funcionalidad al boton menos
    var botonesSumarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }
}

function sumarCantidad(event){
    var selector = buttonClicked.parentElement.parentElement; // Accede al contenedor del elemento
    var cantidadActual = parseInt(selector.querySelector('.item-cantidad').value); // Obtén el valor actual y conviértelo a número entero
    cantidadActual++;
    selector.querySelector('.item-cantidad').value = cantidadActual; // Actualiza el valor del elemento de entrada
    actualizarTotalCarrito();
}
