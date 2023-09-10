// Obtener todos los botones de restar y sumar
var botonesRestar = document.querySelectorAll('.restar-cantidad');
var botonesSumar = document.querySelectorAll('.sumar-cantidad');
var precioTotal = 0;
var items = 0;

// Agregar controladores de eventos a los botones de restar
botonesRestar.forEach(function (botonRestar) {
    botonRestar.addEventListener('click', function () {
        modificarCantidad(this, 'disminuir');
    });
});

// Agregar controladores de eventos a los botones de sumar
botonesSumar.forEach(function (botonSumar) {
    botonSumar.addEventListener('click', function () {
        modificarCantidad(this, 'incrementar');
    });
});

function modificarCantidad(boton, operacion) {
    // Obtener el div padre del botón actual
    var divItem = boton.closest('.items');    
    var h4ValorItem = divItem.querySelector('.valor-item');
    var precioItem = divItem.querySelector('.precio-item');
    var total = document.getElementById('total');
    var pagofinal = document.getElementById('pago-final');
    var carrito = document.getElementById('carrito-objetos');
    // Obtener el valor actual
    var valorActual = parseInt(h4ValorItem.textContent);
    var precioItemActual = parseInt(precioItem.getAttribute('data-precio'));

    // Realizar la operación correspondiente
    if (operacion === 'incrementar') {
        valorActual++;
        precioTotal += precioItemActual;
        items++;

    } else if (operacion === 'disminuir' && valorActual > 0) {
        valorActual--;
        precioTotal -= precioItemActual;
        items--;
    }

    

    // Actualizar el valor en el html
    h4ValorItem.textContent = valorActual;
    total.textContent = '$' + precioTotal.toFixed(2);
    pagofinal.textContent = '$' + precioTotal.toFixed(2);
    carrito.textContent = "Tienes " + items + " productos en tu carrito";
}
