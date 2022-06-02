function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if ( fano.value.lenght == 0 || Number(fano.value) > ano ) {
        window.alert('Data inválida, por favor tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        // variavel vazia 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            // Caso o primeiro radio seja marcado adiciona homem na variavel
            genero = 'Homem'
            if (idade >= 0 && idade <10 ) {
                // criança
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            // Caso o segundo radio seja marcado adiciona mulher na variavel
            genero = 'Mulher'
            if (idade >= 0 && idade <10 ) {
                // criança
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', '/assets/img/exercicios/ex002/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}