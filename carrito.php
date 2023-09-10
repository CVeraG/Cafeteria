<?php
    
// Recibe los datos del carrito enviados a través de la solicitud POST
$nombre = $_POST['nombre']; 
$carritoJSON = $_POST['carrito'];
$total = $_POST['total'];


$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_datos = "cafeteria";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);

if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
}

// Escapa la cadena JSON antes de insertarla en la base de datos
$carritoJSON = mysqli_real_escape_string($conexion, $carritoJSON);

//Hacemos la insercion
$consulta = "INSERT INTO pedido (Nombre,orden,Total) VALUES ('$nombre','$carritoJSON', '$total')";

if (mysqli_query($conexion, $consulta)) {
    echo "Datos del carrito guardados exitosamente en la base de datos";
} else {
    echo "Error al guardar los datos del carrito: " . mysqli_error($conexion);
}
mysqli_close($conexion);

?>