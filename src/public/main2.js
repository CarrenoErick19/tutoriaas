document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datosestudiantes.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.nombre}</td>
                    <td>${item.apellido}</td>
                    <td>${item.contacto}</td>
                    <td>${item.direccion}</td>                   
                    <td>${item.email}</td>
                    <td>${item.curso}</td>
                    <td>${item.paralelo}</td>
                    <td>${item.cedula}</td>
                </tr>
                `
            }

        }

    }
}