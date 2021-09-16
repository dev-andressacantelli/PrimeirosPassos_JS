console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `S�o Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Criando um array p/ n�o precisar dar console.log para cada CONST, tipo:
//console.log(salvador, saoPaulo, rioDeJaneiro);
const listaDeDestinos = new Array(
    `Salvador`,
    `S�o Paulo`,
    `Rio de Janeiro`
);

// Inserindo novos elementos depois de um array j� declarado, usa-se .PUSH
listaDeDestinos.push(`Curitiba`)

console.log("Destinos poss�veis");
console.log(listaDeDestinos);

// Deletando um elemento espec�fico da lista de array, utiliza-se: .SPLICE(POSI��O NA LISTA,QUANTIDADE)
listaDeDestinos.splice(2,1);
//Traduzindo: DELETAR POSI��O 2, UM ELEMENTO.
// Minha lista:
// `Salvador`, POSI��O 0
// `S�o Paulo`, POSI��O 1
// `Rio de Janeiro` POSI��O 2
// `Curitiba`POSI��O 3

// Imprimindo posi��es expec�ficas da lista junto com os demais textos (fora do array):
//console.log(nomeDaLista[posi��odalista], nomeDaLista[posi��odalista]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);


