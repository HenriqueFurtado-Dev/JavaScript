function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = (`Agora são ${hora}:${minutos} horas`)
    if ( hora >= 0 && hora < 12 ) {
        //BOM DIA
        img.src = '/assets/img/exercicios/ex001/manha.webp'
        window.document.body.style.background = '#D3B788'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = '/assets/img/exercicios/ex001/tarde.jpeg'
        window.document.body.style.background = '#623B4D'
    } else {
        //BOA NOITE 
        img.src = '/assets/img/exercicios/ex001/noite.jpeg'
        window.document.body.style.background = '#1F627E'
    }
}
