// Obtener todos los botones de restar y sumar
var botonesRestar = document.querySelectorAll('.restar-cantidad');
var botonesSumar = document.querySelectorAll('.sumar-cantidad');
//Variables para sumas
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

//Modificar la cantidad de producto
function modificarCantidad(boton, operacion) {
    // Obtener el div padre del botón actual y datos del item
    var divItem = boton.closest('.items');    
    var h4ValorItem = divItem.querySelector('.valor-item');
    var precioItem = divItem.querySelector('.precio-item');
    var total = document.getElementById('total');
    var pagofinal = document.getElementById('pago-final');
    var carrito = document.getElementById('carrito-objetos');
    // Obtener el valor actual
    var valorActual = parseInt(h4ValorItem.textContent);
    var precioItemActual = parseInt(precioItem.getAttribute('data-precio'));

    // Realizar la operación correspondiente para aumentar
    if (operacion === 'incrementar') {
        valorActual++;
        precioTotal += precioItemActual;
        items++;
    
    //O disminuir el valor
    } else if (operacion === 'disminuir' && valorActual > 0) {
        valorActual--;
        precioTotal -= precioItemActual;
        items--;
    }



    // Actualizar los valores en index
    h4ValorItem.textContent = valorActual;
    total.textContent = '$' + precioTotal.toFixed(2);
    pagofinal.textContent = '$' + precioTotal.toFixed(2);
    carrito.textContent = "Tienes " + items + " productos en tu carrito";
}

//Funcion para enviar datos a la base al dar click en ordenar
function ordenar() {
    // Recopila los datos del carrito en un objeto
    var nombre = document.getElementById('nombre').value;
    var total = precioTotal;
    var carrito = {
        items: []
    };

    // Recorre los elementos del carrito y agrega los datos al objeto
    var itemsCarrito = document.querySelectorAll('.items');
    itemsCarrito.forEach(function (item) {
        var nombre = item.querySelector('.nombre-item').textContent;
        var cantidad = parseInt(item.querySelector('.valor-item').textContent);
        //Agregar elementos que tengan a partir de un item
        if (cantidad > 0) {
            carrito.items.push({
            nombre: nombre,
            cantidad: cantidad
            });
        }
    });
    //Comunicacion con servidor
    $.ajax({
        type: 'POST',
        url: 'carrito.php', 
        data: { nombre: nombre , carrito: JSON.stringify(carrito), total: total },
        success: function (response) {
            // Procesa la respuesta del servidor
        },
        error: function (error) {
           
        }
    });
}
