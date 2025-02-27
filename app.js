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
    //para que el cursor quede posicionado en el cuadro de texto para capturar otro nombre
    inputAmigo.focus();

}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    //limpia el contenido actual de la lista dejando un string vacio
    listaAmigos.innerHTML = ""; 

    //recorrer el array con un ciclo
    for (let i = 0; i < array.length; i++) {
        //se crea una variable item para crear un elemento li dentro de ella, el cual corresponde a los nombres
        let item = document.createElement("li");
        //se le pasa a item el contenido dentro de los indices del array amigo
        item.textContent = amigo(i);
        //se agrega como hijo a la  li que se llamo item
        listaAmigos.appendChild(li);
    }

}
