<?php
// Datos de conexión a la base de datos
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_datos = "cafeteria";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " .$conexion->connect_error);
}

insertar_direccion($conexion);

function insertar_direccion($conexion){
    $rnombre =$_POST['dnombre'];
    $redificio =$_POST['dedificio'];
    $rpiso =$_POST['dpiso'];
    $rsalon =$_POST['dsalon'];
    $rinstrucciones =$_POST['dinstrucciones'];

    $consulta = "INSERT INTO direccion(Nombre,Edificio,Piso,Salon,Instrucciones) 
    VALUES ('$rnombre', '$redificio', '$rpiso', '$rsalon', '$rinstrucciones')";

    mysqli_query($conexion,$consulta);
    mysqli_close($conexion);
    
}
// Datos de dirección de entrega


// Insertar datos de dirección de entrega en la tabla de Dirección de Entrega


