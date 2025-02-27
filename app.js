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


    //limpia el campo
    inputAmigo.value = "";
    //para que el cursor quede posicionado en el cuadro de texto para capturar otro nombre
    inputAmigo.focus();

    //actualiza la lista
    actualizarLista();

}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    //limpia el contenido actual de la lista dejando un string vacio
    listaAmigos.innerHTML = ""; 

    //recorrer el array con un ciclo
    for (let i = 0; i < amigos.length; i++) {
        //se crea una variable item para crear un elemento li dentro de ella, el cual corresponde a los nombres
        let item = document.createElement("li");
        //se le pasa a item el contenido dentro de los indices del array amigo
        item.textContent = amigos[i];
        //se agrega como hijo a la  li que se llamo item
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo() {
    if (amigos.length == 0)  {
        alert("No hay amigos para sortear");
        return;
    }
    //genera un numero aleatorio entre 0 y el tamaño de la lista amigos.length
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //aqui se utiliza el numeero generado como indice para obtener 
    // el nombre del amigo sosrteado
    let amigoSorteado = amigos[indiceAleatorio];

    //muestar el resultado en el html
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

}