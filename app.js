// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creacion del array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    let  inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //validacion para que el usuario no envie el campo vacio
    if (nombreAmigo === "") {
        alert("por favor digite un nombre valido");
        return; //detiene la ejecucion de la funcion
    }



    //valida que el nombre no este en el array
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista` );
        return;
    }

    //agrega el nombre al array amigos
    amigos.push(nombreAmigo);


    //actualiza la lista
    actualizarLista();

    //limpia el campo
    inputAmigo.value = "";
    inputAmigo.focus();

}

