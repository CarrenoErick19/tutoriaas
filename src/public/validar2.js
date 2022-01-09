const asignatura = document.getElementById("materiatut");
const curso = document.getElementById("cursotut");
const fecha = document.getElementById("fechatut");
const numestudiantes = document.getElementById("estudiantestut");
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

    if(fecha.value.length <8 ){
        alert(`Ingrese una fecha válida`);
      
    }

    if(numestudiantes.value.length <1 ){
        alert(`Ingrese un número de estudiantes válido`);
        entrar = true
       
    }

    if(entrar){
        parrafo.innerHTML = warnings
        e.preventDefault()      
    }
    else  {
        alert(`Tutoría asignada correctamente`); 
     }
}) 





  

