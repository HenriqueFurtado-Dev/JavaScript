

function adicionar() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')

    n = Number(num.value)

    res.innerHTML += `Valor ${n} adicionado <br>`
    var num = []
    num.push(n)
}

function mostrar() {
    result = document.getElementById('resultado')
    result.innerHTML += (`Ao todo, temos ${num.value.length} números cadastrados <br>`)
    result.innerHTML += (`O maior valor informado, foi:  ${num.value} <br>`)
}