console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Criando um array p/ não precisar dar console.log para cada CONST, tipo:
//console.log(salvador, saoPaulo, rioDeJaneiro);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// Inserindo novos elementos depois de um array já declarado, usa-se .PUSH
listaDeDestinos.push(`Curitiba`)

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// Deletando um elemento específico da lista de array, utiliza-se: .SPLICE(POSIÇÃO NA LISTA,QUANTIDADE)
listaDeDestinos.splice(2,1);
//Traduzindo: DELETAR POSIÇÃO 2, UM ELEMENTO.
// Minha lista:
// `Salvador`, POSIÇÃO 0
// `São Paulo`, POSIÇÃO 1
// `Rio de Janeiro` POSIÇÃO 2
// `Curitiba`POSIÇÃO 3

// Imprimindo posições expecíficas da lista junto com os demais textos (fora do array):
//console.log(nomeDaLista[posiçãodalista], nomeDaLista[posiçãodalista]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);


