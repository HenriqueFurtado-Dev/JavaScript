function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.getElementById('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        window.alert('Dados inválidos')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 

        if (i < f) {
            //Contagem crescente
            c = i
            while (c <= f) {
                res.innerHTML += ` ${c} \u{1F449} `
                c += p
            }

        } else {
            // Contagem regressiva
            c = i
            while (c >= f) {
                res.innerHTML += ` ${c} \u{1F449} `
                c -= p
            }
        }

        res.innerHTML += `\u{1F3C1}`
        
     }
}

