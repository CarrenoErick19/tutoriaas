<!DOCTYPE html>
<html lang="en">
<head>  
    <link rel="icon" type="jpg" href="IMG/icono_tutoria.png">
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Registro de estudiante</title>
    <script>
        function solonumeros(e){
  
          key=e.keyCode || e.which;
  
          teclado=String.fromCharCode(key);
  
          numeros="0123456789";
  
          especiales="8-37-38-46"; //array
  
          teclado_especial= false;
          
          for(var i in especiales){
  
            if(key==especiales[i]){
              teclado_especial=true; 
            }
  
          }
  
          if(numeros.indexOf(teclado)==-1 && !teclado_especial){
            return false;
          }
          
        }
      </script>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap" rel="stylesheet">
   <style>
        header{
            background: black;
        }
    </style> 
   <link href="estilos.css" rel="stylesheet" />
</head>
<body bgcolor="white">                     
    <header class="header"> 
    <div class="container">
        <nav class="menu">

            <ul class ="nav">
                <li> <a href="./Inicio.html"> Salir </a> </li>
                <li> <a href="./contactoestudiante.php"> Contacto </a> </li>
                <li> <a href="./inicioestudiante.html"> Iniciar Sesión </a> </li>

             </ul>
        </nav>
        <figure class="logo">
            <img  width='200'src="IMG/logo_uleam_B.png" alt="Tutorships"/>          
        </figure>   
       </div>
    </header>
	
	<?php
		if (isset ($_POST ['ENVIAR']))
		{
			$nombre1=$_POST ["nombre"];
            $apellido1=$_POST ["apellido"];
            $ntele1=$_POST ["ntele"];
            $direccion1=$_POST ["direccion"];	
			$email1=$_POST ["email"];
            $contrasena1=$_POST ["contrasena"];
			$cedula1=$_POST ["cedula"];
				header("location: registroestudiante.php");		
			$link =mysqli_connect("localhost","root");
			if (mysqli_connect_errno())
			{
				printf("Error De Conexion %5\n",mysqli_connect_errno);
				exit ();
			}
			mysqli_select_db ($link ,"tutorias");
			$r=mysqli_query($link, "Insert into registro_estudiante1(nombre,apellido,telefono,direccion,email,contrasena,cedula)values('$nombre1','$apellido1','$ntele1','$direccion1','$email1','$contrasena1','$cedula1')");
			if (!$r)
				printf ("Error %5\n",mysqli_error($link));

			mysqli_close($link);
		}
		else
		{
	?>
</BR>
 <div class="container1">
        <main class="content">
            <form  action="registroestudiante.php" method="POST" id="form">  
                <div class="form">                            
                    <h1>Registrarse como estudiante</h1>    <br>       
                    <div class="grupo">                
                        <label for=""> nombre</label>
                        <input type="text" name="nombre" id="" PlaceHolder='Ingrese un nombre' required><span class="barra"></span> 
                    </div>
                    <div class="grupo">                
                        <label for=""> apellido</label>
                        <input type="text" name="apellido" id="" PlaceHolder='Ingrese un apellido' required><span class="barra"></span> 
                    </div>
                    <div class="grupo">                
                        <label for=""> Contacto</label>
                        <input type="text" name="ntele" id="" maxlength="10" PlaceHolder='Ingrese su número de contacto' onkeypress="return solonumeros(event)" required><span class="barra"></span> 
                    </div>
                    <div class="grupo">
                        <label for=""> Dirección</label>
                        <input type="text" name="direccion" id="" PlaceHolder='Ingrese su dirección de domicilio' required><span class="barra"></span>                   
                    </div>  
                    <div class="grupo">
                        <label for=""> E-Mail</label>
                        <input type="text" name="email" id="" PlaceHolder='Ingrese su correo electrónico' required><span class="barra"></span>                   
                    </div>
                    <div class="grupo">
                        <label for=""> Contraseña</label>
                        <input type="text" name="contrasena" id="" PlaceHolder='Ingrese una contraseña' required><span class="barra"></span>                   
                    </div>                    
                    <div class="grupo">                
                        <label for=""> Cedula de identidad</label>
                        <input type="text" name="cedula" id="" PlaceHolder='Ingrese su cedula de identidad' required><span class="barra"></span> 
                     <br>
                    <button onclick="enviar" name="ENVIAR" value="ENVIAR">
                        Enviar</button>
                    <p class="warnings" id="warnings"></p>
                </div>                                                
            </form>
        <script src="validarRE.js"></script> 
        </main>       
      </div>

    </div>
      <footer class="footer"> 
        <p class="text2">Aplicaciones Web I </p>
        <p class="text2">Trabajo Grupal @2021</p>
      </footer>
	<?php
		}
	?>
	</body>
</html>	