
// Array / Vetor
let num = [5, 8, 2, 9 ,3, 12, 34, 45, 12, 45, 98, 72, 34]
num.sort()

// Criando variáveis
fim = num.length
c = 0 

// Mostrando todos os vetores
while (c < fim) {
    console.log(`A posição ${c}, tem o valor ${num[c]}`)
    c++
}

// Procura o valor dentro dos arrays
num.indexOf(12)

// Quando retornado -1 == não foi encontrado o valor


let pos = num.indexOf(4512)

if (pos == -1) {
    console.log(`O valor não foi achado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

