var nome = prompt(`Digite seu nome`)
var anodenascimento = prompt(`Digite seu ano de nascimento`)
var anoatual = 2023
var idade = anoatual - anodenascimento
alert(`Olá ${nome}, você atualmente tem ${idade} anos. `)

function soma(valor1, valor2){
    let soma = valor1 + valor2;
    return soma;    
}

console.log(soma(5, 5))
console.log(soma(3, 9)) 