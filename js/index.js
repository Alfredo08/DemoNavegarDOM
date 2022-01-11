function actualizaLike( botonLike ){
    let divLike = botonLike.closest( '.contenedor' ).querySelector( '.likes' );
    //let divLike = botonLike.parentElement.previousElementSibling
    let num = Number( divLike.innerText );
    num ++;
    divLike.innerText = num;
}