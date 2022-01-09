<!DOCTYPE html>
<html lang="en">
<head>  
    <link rel="icon" type="jpg" href="IMG/icono_tutoria.png">
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Contacto</title>
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
			$nombre=$_POST ["nombre"];	
			$email=$_POST ["email"];
			$ntele=$_POST ["ntele"];
			$mensaje=$_POST ["mensaje"];
            header("location: contactoestudiante.php");
			$link =mysqli_connect("localhost","root");
			if (mysqli_connect_errno())
			{
				printf("Error De Conexion %5\n",mysqli_connect_errno);
				exit ();
			}
			mysqli_select_db ($link ,"tutorias");
			$r=mysqli_query($link, "Insert into contacto_estudiante (nombre, email, telefono, mensaje)values('$nombre','$email','$ntele','$mensaje')");
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
            <form  action="contactoestudiante.php" method="POST" id="form">  
                <div class="form">                            
                    <h1>Contacto</h1>    <br>       
                    <div class="grupo">                
                        <label for=""> nombre</label>
                        <input type="text" name="nombre" id="nombre" PlaceHolder='Ingrese un nombre' required><span class="barra"></span> 
                    </div>
                    <div class="grupo">
                        <label for=""> E-Mail</label>
                        <input type="text" name="email" id="email" PlaceHolder='Ingrese su correo electrónico' required><span class="barra"></span>                   
                    </div>
                    <div class="grupo">                
                        <label for=""> Número telefónico</label>
                        <input type="text" name="ntele" id="ntele" maxlength="10" PlaceHolder='Ingrese su número de contacto' onkeypress="return solonumeros(event)" required><span class="barra"></span> 
                    </div>
                    <div class="grupo">                
                        <label for=""> Mensaje</label>
                        <input type="text" name="mensaje" id="mensaje" PlaceHolder='Ingrese el mensaje' required><span class="barra"></span> 
                     <br>
                    <button onclick="enviar" name="ENVIAR" value="ENVIAR">
                        Enviar</button>
                    <p class="warnings" id="warnings"></p>
                </div>                                                
            </form>
        <script src="validarc.js"></script>    
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