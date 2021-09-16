console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);


// Montando um código que verifica se o comprador é maior de idade ou se é menor acompanhado:

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1); //removendo item
// } else {
//     console.log("Não é maior de idade, não posso vender essa viagem.");
// }
// console.log(listaDeDestinos);


// Melhorando o código anterior, otimizando:
if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2,1); //removendo item
}else{
    console.log("Não é maior de idade, não posso vender essa viagem.");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Pode embarcar, boa viagem, ahoy!");
}else{
    console.log("Você não pode embarcar.");
}

console.log(listaDeDestinos);