function contar() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')

    i = Number(num.value)

    c = 1

    if ( num == 0 ) {
        window.alert('Número inválido')
    } else {
        // Limpa a tabuada antes de fazer outro cálculo
        res.innerHTML = ''
        // Tabuada
        while (c <= 10) {
            s = i * c
            res.innerHTML += `${i} x ${c} = ${s} <br>`
            c++
        }
    }


    
}