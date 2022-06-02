function somar() {
    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    total = n1 + n2
    var resposta = window.document.querySelector('div#resposta')
    resposta.innerHTML = (`${n1} = ${n2} = ${total}`)
}

