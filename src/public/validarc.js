const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const ntele = document.getElementById("ntele");
const mensaje = document.getElementById("mensaje");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    let warnings = ""
    let entrar = false 
    parrafo.innerHTML = ""
    
    if(nombre.value.length <4){
        alert( `Ingrese un nombre`);
       
    }
    if(email.value.length <2 ){
        alert(`Ingrese un correo electrónico`);
       
    }

    if(ntele.value.length <8 ){
        alert(`Ingrese un número de teléfono`);
      
    }

    if(mensaje.value.length <1 ){
        alert(`Ingrese un mensaje`);
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