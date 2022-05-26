function calcular() {
    var input1 = window.document.getElementById('input1')
    var input2 = window.document.getElementById('input2')
    var resultado = window.document.getElementById('resultado')
    var n1 = Number(input1.value)
    var n2 = Number(input2.value)
    soma = n1 + n2
    sub = n1 - n2
    mult = n1 * n2
    div = n1 / n2
    resultado.innerHTML = `${n1} + ${n2} = ${soma} <br> ${n1} - ${n2} = ${sub} <br> ${n1} x ${n2} = ${mult} <br> ${n1} / ${n2} = ${div.toFixed(2)} <br>  `
}