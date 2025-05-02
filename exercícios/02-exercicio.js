// // Lista de nomes cadastrados (exemplos com problemas diversos)
// const nomesCadastrados = [
//   "   Rex   ", // espaços extras
//   "belinha", // tudo minúsculo
//   "Luna Silva", // mais de uma palavra
//   "  THOR  ", // tudo maiúsculo com espaços
//   "bob  ", // minúsculo com espaço no final
//   "   ", // vazio ou só espaço
//   "Doguinho123", // contém números
//   "Fiona", // nome simples e correto
// ];

// // Função para limpar, padronizar e validar o nome
// function formatarNome(nome) {
//   const nomeOriginal = nome; // guarda o nome como foi cadastrado

//   // Remove espaços do início e fim, substitui múltiplos espaços por um único,
//   // transforma em minúsculo e depois capitaliza a primeira letra de cada palavra
//   const nomeFormatado = nome
//     .trim() // remove espaços extras no começo e no fim
//     .replace(/\s+/g, " ") // substitui múltiplos espaços internos por apenas um
//     .toLowerCase() // deixa tudo em minúsculo
//     .replace(/(?:^|\s)\S/g, (letra) => letra.toUpperCase()); // capitaliza a primeira letra de cada palavra

//   // Separa o nome por espaço para verificar se há mais de uma palavra
//   const partes = nomeFormatado.split(" ");

//   // Verifica se o nome tem apenas uma palavra E contém apenas letras (inclusive acentos)
//   const nomeValido =
//     partes.length === 1 && /^[A-Za-zÀ-ÿ]+$/.test(nomeFormatado);

//   // Exibe os resultados no console
//   console.log("Nome original:  ", `"${nomeOriginal}"`);
//   console.log("Nome formatado: ", `"${nomeFormatado}"`);
//   console.log("Nome válido?    ", nomeValido ? "Sim" : "Não");
//   console.log("-----------------------------");
// }

// // Executa a função para cada nome da lista
// nomesCadastrados.forEach(formatarNome);
/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

// const nomeDog = "tH   oR@!%  "
// const nomeDog = '   Ba!ley Mari@    '
const nomeDog = "Doguinho123";

let nomeFormatado = nomeDog.trim();
nomeFormatado = removerCaracteresEspeciais(nomeFormatado);
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado);

// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length === 1;

// 10 == '10'
// 10 === '10'

/*

  operadores = comparacao, logica, aritmética

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

*/

//(Soluução do professor)
const valido = verificarSeONomeEValido(nomeFormatado);

console.log(nomeDog);
console.log(nomeFormatado);
console.log(valido);

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "");
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return (
    nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
  );
}

function verificarSeONomeEValido(nome) {
  return nome.split(" ").length === 1;
}
