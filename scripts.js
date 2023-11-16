function actualizarTexto(){
    document.getElementById('parrafo').innerText = 'Hola desde javascript';
}


function actualizarHTML(){
    document.getElementById('h2').innerHTML = "<small>Bienvenidos a Colombia</small>";
}

function actualizarTitulo(){
    document.getElementById('img-colombia').setAttribute('title' , 'Esto es un perfil');
}

function actualizarColorCuadro(){
    document.getElementById('cuadro').classList.remove('cuadro');
    document.getElementById('cuadro').classList.add('cuadro-verde');
}