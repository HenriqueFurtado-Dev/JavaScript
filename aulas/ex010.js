// Array é um conjunto de variáveis 

// Criando o conjunto
let num = [5, 8, 2, 9 ,3]

// Adicionando em uma posição
num[4] = 64

// Adiciona um valor por último
num.push(500)

//Tamanho do array
num.length

// Ele coloca os elementos em ordem crescente
num.sort

num.sort
num.push(1)
console.log (`Nosso vetor é o ${num}`)
console.log(`O número tem ${num.length} posições`)
console.log(`O primeiro valor do vetor ${num[0]}`)

fim = num.length

c = 0 

while (c < fim) {
    console.log(num[c])
    c++
}