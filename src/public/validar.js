const nombre = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    let warnings = ""
    let entrar = false 
    parrafo.innerHTML = ""
    
    if(nombre.value.length <10 || nombre.value.length >10){
        alert(`El usuario ingresado no es valido. Recuerde que debe iniciar sesión con su número de cédula.`) ;
    }
    if(pass.value.length <8){
        alert(` La contraseña que ingresó no es valida. La longitud de la misma debe ser de 8 o más dígitos.`) ;
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
        e.preventDefault()
    }
    else  {
        alert(`Bienvenido`); 
     }
})
