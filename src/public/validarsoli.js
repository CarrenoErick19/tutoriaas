const asignatura = document.getElementById("materiatut");
const curso = document.getElementById("cursotut");
const nombre = document.getElementById("nombre");
const motivo = document.getElementById("motivo");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    let warnings = ""
    let entrar = false 
    parrafo.innerHTML = ""
    
    if(asignatura.value.length <4){
        alert( `Ingrese una asignatura válida`);
       
    }
    if(curso.value.length <2 ){
        alert(`Ingrese un curso válido`);
       
    }

    if(nombre.value.length <8 ){
        alert(`Ingrese un nombre válido`);
      
    }

    if(motivo.value.length <1 ){
        alert(`Ingrese un motivo`);
        entrar = true
       
    }

    if(entrar){
        parrafo.innerHTML = warnings
        e.preventDefault()      
    }
    else  {
        alert(`Solicitud enviada correctamente`); 
     }
}) 