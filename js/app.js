let botonVerMas = document.getElementById("btnVerMas")
//Añadir un manejador de eventos
botonVerMas.addEventListener("click",verMas)
//Si tengo que enviar argumentos a la función uso una funcion anónioma
//botonVerMas.addEventListener("click",()=>{ verMas(param1,param2)})


function cambiarTitulo(){
    console.log('Desde cambiar Titulo');
    // traer el h1 del html
    let titulo = document.querySelector('h1');
    // let titulo = document.querySelector('.container');
    // let titulo = document.querySelector('#nombreId');
    //  let titulo = document.getElementsByTagName('h1'); //devuelve un htmlCollection
    //  let titulo = document.getElementById('tituloPrincipal'); //devuelve un objeto
    //  let titulo = document.getElementsByClassName('container'); //devuelve un htmlCollection
    console.log(titulo.className);
    titulo.className = 'text-primary';
    titulo.innerHTML = 'Nuevo titulo desde <b>JS</b>';
    // titulo.innerText = 'Nuevo titulo desde JS';
}
function verMas(){
    console.log("Desde la función 'Ver Mas'")
    //Traemos el "section" padre
    let seccionPadre = document.querySelector("#contenedorPadre")
    //Creamos el nuevo elemento
    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, ipsa quam aut odit maxime, eligendi dolor
    nesciunt pariatur nisi beatae dolore, culpa iste? Quod minus, tenetur incidunt ducimus molestias neque vitae
    maiores ratione ea perferendis facere nulla, itaque deserunt, totam quas officia. Voluptate cupiditate
    eveniet, est numquam beatae neque, veritatis debitis ea iusto magni, sapiente totam architecto assumenda.
    Quasi tempore tenetur`
    parrafo.className = "lead"
    //Insertar el nodo hijo
    //seccionPadre.appendChild(parrafo);
    //seccionPadre.prepend(parrafo);
    seccionPadre.insertBefore(parrafo,botonVerMas);
}