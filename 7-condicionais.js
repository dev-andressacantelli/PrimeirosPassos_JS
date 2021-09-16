console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `S�o Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos poss�veis");
console.log(listaDeDestinos);


// Montando um c�digo que verifica se o comprador � maior de idade ou se � menor acompanhado:

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador est� acompanhado");
//     listaDeDestinos.splice(1,1); //removendo item
// } else {
//     console.log("N�o � maior de idade, n�o posso vender essa viagem.");
// }
// console.log(listaDeDestinos);


// Melhorando o c�digo anterior, otimizando:
if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2,1); //removendo item
}else{
    console.log("N�o � maior de idade, n�o posso vender essa viagem.");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Pode embarcar, boa viagem, ahoy!");
}else{
    console.log("Voc� n�o pode embarcar.");
}

console.log(listaDeDestinos);