function verificar() {
    var nome = window.document.getElementById('txt')
    var resposta = window.document.getElementById('resposta')
    resposta.innerHTML = `É um prazer te conhecer ${nome.value}`
}
