const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const ntele = document.getElementById("ntele");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const cedula = document.getElementById("cedula");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    let warnings = ""
    let entrar = false 
    parrafo.innerHTML = ""
    
    if(nombre.value.length <4){
        alert( `Ingrese un nombre`);
       
    }
    if(apellido.value.length <4){
        alert( `Ingrese un apellido`);
       
    }
    if(ntele.value.length <10 ){
        alert(`Ingrese un número de teléfono de contacto`);
      
    }
    if(direccion.value.length <8 ){
        alert(`Ingrese su dirección`);
      
    }
    if(email.value.length <2 ){
        alert(`Ingrese un correo electrónico`);
       
    }

    if(contraseña.value.length <8 ){
        alert(`Ingrese una contraseña`);
      
    }
    if(cedula.value.length <10 ){
        alert(`Ingrese su cedula de identidad`);
        entrar = true
       
    }

    if(entrar){
        parrafo.innerHTML = warnings
        e.preventDefault()      
    }
    else  {
        alert(`Mensaje enviado`); 
     }
}) 