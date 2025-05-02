// /**

// Validador de nomes para as tags

// Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

// Aplique as formatações e exiba:
// - O nome original, como foi cadastrado
// - O nome formatado

// Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

// Exemplos:

//   - nomes válidos
//     - Pipoca
//     - Guaraná
//     - Paçoca
//   - nomes inválidos
//     - Peggy Carter
//     - Pantera Negra

//  */

// // const nomeDog = "tH   oR@!%  "
// const nomeDog = '   Ba!ley Mari@    '

// let nomeFormatado = nomeDog.trim()
// nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
// nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

// // const palavras = nomeFormatado.split(/\s+/);
// // const palavras = nomeFormatado.split(" ");
// // const valido = palavras.length === 1;

// // 10 == '10'
// // 10 === '10'

// /*
// /*

//   operadores = comparacao, logica, aritmética

//     VALOR A maior que VALOR B
//     VALOR A menor que VALOR B

//     == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B
//     === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

// */

// const valido = verificarSeONomeEValido(nomeFormatado)

// console.log(nomeDog)
// console.log(nomeFormatado)
// console.log(valido)

// function removerCaracteresEspeciais(nome) {
//   // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
//   return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
// }

// function removerEspacosEntreAPalavra(nome) {
//   return nome.replace(/\s+/g, "")
// }

// function tornarAPrimeiraLetraMaiuscula(nome) {
//   return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
// }

// function verificarSeONomeEValido(nome) {
//   return nome.split(" ").length === 1
// }

/**
Gerador de tags de identificação

Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. O dono irá informar nome, idade, peso, raça e se é adotado ou não.

A tag deve ter:
  O nome em letras maiúsculas
  A raça com a primeira letra maiúscula
  Peso

*/

//(Soluução do professor)

const nome = "Dogo",
  raca = "vira-lata";
let idade = 1,
  peso = 1.2,
  adotado = false;

const dogThor = {
  nome: "Thor",
  raca: "SRD",
  idade: 1,
  peso: 10.5,
  adotado: true,
};

let nameUpperCase = nome.toUpperCase();
let racaFirsletter =
  raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase();

const animal = [
  {
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter,
  },
];

console.log(animal);

const dogThorTag = {
  nome: dogThor.nome.toUpperCase(),
  raca:
    dogThor.raca.slice(0, 1).toUpperCase() +
    dogThor.raca.slice(1).toLowerCase(),
  peso: dogThor.peso,
};

console.table(dogThorTag);
// console.log(`Nome: ${ dogThor.nome.toUpperCase() } - Raça ${ dogThor.raca.slice(0, 1).toUpperCase() + dogThor.raca.slice(1).toLowerCase() } - Peso: ${ dogThor.peso }`)
