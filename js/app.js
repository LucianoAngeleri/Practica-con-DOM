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