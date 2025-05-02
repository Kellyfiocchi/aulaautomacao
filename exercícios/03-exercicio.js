// // Script: Testes com Porte Pequeno e Grande

// const idadeMinima = 2;

// const dogs = [
//   { nome: "Rex", idade: 1, pequenoPorte: true }, // Pequeno porte, idade baixa -> Apto
//   { nome: "Thor", idade: 3, pequenoPorte: false }, // Grande porte, idade alta -> Apto
//   { nome: "Luna", idade: 1, pequenoPorte: false }, // Grande porte, idade baixa -> Não apto
//   { nome: "Mel", idade: 2, pequenoPorte: true }, // Pequeno porte, idade mínima -> Apto
//   { nome: "Bob", idade: 5, pequenoPorte: false }, // Grande porte, idade alta -> Apto
//   { nome: "Toby", idade: 0.5, pequenoPorte: true }, // Pequeno porte, idade muito baixa -> Apto
//   { nome: "Max", idade: 1.5, pequenoPorte: false }, // Grande porte, idade baixa -> Não apto
//   { nome: "Nina", idade: 2.5, pequenoPorte: false }, // Grande porte, idade boa -> Apto
//   { nome: "Pipoca", idade: 0.8, pequenoPorte: false }, // Grande porte, muito nova -> Não apto
// ];

// // Verificando
// dogs.forEach((dog) => {
//   const aptoParaAdocao = dog.idade >= idadeMinima || dog.pequenoPorte;

//   console.log("---------------");
//   console.log("Nome do Dog:", dog.nome);
//   console.log("Idade:", dog.idade, "ano(s)");
//   console.log("Porte:", dog.pequenoPorte ? "Pequeno" : "Grande");
//   console.log("Apto para adoção?", aptoParaAdocao ? "Sim" : "Não");
// });

/**
 
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

Use os operadores adequados e exiba:
  Nome do dog
  Idade
  Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade

Exemplos:
  mínimo = 2

  idade 1 + porte M = nao
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte

*/

//(Soluução do professor)

const nome = "Ada";
const idade = 0;
const porte = "P";

const idadeMinima = 2;

const adocao = idade >= idadeMinima ? "sim" : porte === "P" ? "sim" : "não";

const adocaov2 = idade >= idadeMinima || porte === "P";

console.log(adocao);
console.log(adocaov2);

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima ? "sim" : porte === "P" ? "sim" : "não";

  // return adocao
  console.log(adocao);
}

// idade 1 + porte M = nao
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, "M");
verificarSePodeSerAdotado(2, "M");
verificarSePodeSerAdotado(2, "P");
verificarSePodeSerAdotado(1, "P");
