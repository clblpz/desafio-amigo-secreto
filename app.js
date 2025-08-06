// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desafío: Crear un sorteo de amigos
let amigos = [];

//Agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre de un amigo válido.");
        return;
    }

    //La primer letra del nombre sera mayúscula, resto minúsculas
    const nombreCorrecto = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    //Verificar que no se duplique en el Array
    const yaExiste = amigos.includes(nombreCorrecto);

    if (yaExiste) {
        alert("Ese amigo ya se encuentra en la lista");
        return;
    }

    amigos.push(nombreCorrecto);
    mostrarAmigos();
    document.querySelector('#amigo').value = '';
}


//Mostrar lista de amigos
function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    if (amigos.length === 0) {
        console.log("No hay nombres de amigos en la lista");
        return;
    }

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");

        //Botón editar solo con el ícono de lápiz
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "✅";
        botonEditar.title = "Editar";
        botonEditar.style.marginRight = "4px";
        botonEditar.style.background = "none";
        botonEditar.style.border = "none";
        botonEditar.style.cursor = "pointer";
        botonEditar.style.padding = "2px 4px";
        botonEditar.onclick = function () {
            editarAmigo(index);
        };

        const nombreCapitalizado = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();

        li.appendChild(botonEditar);
        li.appendChild(document.createTextNode(`${nombreCapitalizado}`));

        listaAmigos.appendChild(li);
    });
}

// Editar un amigo
function editarAmigo(index) {
    const nuevoNombre = prompt("Edita el nombre del amigo:", amigos[index]);
    if (nuevoNombre && nuevoNombre.trim() !== "") {
        const nombreCorrecto = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.slice(1).toLowerCase();
        //Verificar que no se repita el nombre editado
        if (amigos.includes(nombreCorrecto)) {
            alert("Ese amigo ya se encuentra en la lista.");
            return;
        }
        amigos[index] = nombreCorrecto;
        mostrarAmigos();
    }
}

/**
 * Eliminar amigo de lista
*/
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    limpiarResultados();
}
  const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "#FF0000";
    
//Sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben existir al menos 2 amigos en la lista para realizar el sorteo");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const nombreCapitalizado = amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1).toLowerCase();

    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `🎉¡Sorpresa! Tu amigo secreto es: ${nombreCapitalizado}🎉`;
    resultado.appendChild(li);

    document.querySelector(".button-draw").disabled = true;
}

function reiniciarSorteo() {
    amigos = [];

    //Limpieza de listas
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    //Activación botón de sorteo
    document.querySelector("button-draw").disable = true;

    //Limpieza input
    document.querySelector('#amigo').value = '';

    alert("¡Comencemos de nuevo!");
}
