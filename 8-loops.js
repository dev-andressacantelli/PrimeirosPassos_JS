// Operadores lógicos:
// && = e
// || = ou
// !  = negação

console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18; //tente colocar um número menor que 18 e veja pelo node!
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";
// Se colocar um destino que não existe na lista, dará destino FALSE, 
//exibindo mensagem de: "Desculpe, tivemos um erro!"
//ex: const destino = "Curitiba";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;
while(contador <3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //colocando break p/ não cair no contador caso destinoExiste = true, evitando laço desnecessário.

        // O comando break interrompe o fluxo de execução do laço de maneira forçada, 
        //sem precisarmos atingir a condição de saída.
        // Ao colocarmos um break dentro do laço estamos falando p/ o interpretador que quando ele chegar nessa linha
        //ele deve sair do laço independentemente de outras condições.
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

// SE variável "podeComprar" = true AND variável destinoExiste = true
if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, tivemos um erro!");
}     

// ESTRUTURA DE UM FOR: for (inicialização; condicional; incrementa)

//for ([inicialização]; [condição]; [expressão final])
//   declaração

//EXEMPLO
//for (var i = 0; i < 9; i++) {
//  console.log(i);

// (declara variável  ; condição depois de cada loop ;  execução final de cada loop)
for(let cont = 0 ; cont < 3 ; cont ++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //colocando break p/ não cair no contador caso destinoExiste = true, evitando laço desnecessário.

        // O comando break interrompe o fluxo de execução do laço de maneira forçada, 
        //sem precisarmos atingir a condição de saída.
        // Ao colocarmos um break dentro do laço estamos falando p/ o interpretador que quando ele chegar nessa linha
        //ele deve sair do laço independentemente de outras condições.
    }
    contador += 1;
}



// PS: É MUITO COMUM VER UM LOOP FOR DESSA MANEIRA:

// for(let i = 0 ; i < 3 ; i++){
//     if(listaDeDestinos[i] == destino){
//         destinoExiste = true;
//     }
// }