// Operadores l�gicos:
// && = e
// || = ou
// !  = nega��o

console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `S�o Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18; //tente colocar um n�mero menor que 18 e veja pelo node!
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "S�o Paulo";
// Se colocar um destino que n�o existe na lista, dar� destino FALSE, 
//exibindo mensagem de: "Desculpe, tivemos um erro!"
//ex: const destino = "Curitiba";

console.log("\n Destinos poss�veis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;
while(contador <3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //colocando break p/ n�o cair no contador caso destinoExiste = true, evitando la�o desnecess�rio.

        // O comando break interrompe o fluxo de execu��o do la�o de maneira for�ada, 
        //sem precisarmos atingir a condi��o de sa�da.
        // Ao colocarmos um break dentro do la�o estamos falando p/ o interpretador que quando ele chegar nessa linha
        //ele deve sair do la�o independentemente de outras condi��es.
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

// SE vari�vel "podeComprar" = true AND vari�vel destinoExiste = true
if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, tivemos um erro!");
}     

// ESTRUTURA DE UM FOR: for (inicializa��o; condicional; incrementa)

//for ([inicializa��o]; [condi��o]; [express�o final])
//   declara��o

//EXEMPLO
//for (var i = 0; i < 9; i++) {
//  console.log(i);

// (declara vari�vel  ; condi��o depois de cada loop ;  execu��o final de cada loop)
for(let cont = 0 ; cont < 3 ; cont ++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //colocando break p/ n�o cair no contador caso destinoExiste = true, evitando la�o desnecess�rio.

        // O comando break interrompe o fluxo de execu��o do la�o de maneira for�ada, 
        //sem precisarmos atingir a condi��o de sa�da.
        // Ao colocarmos um break dentro do la�o estamos falando p/ o interpretador que quando ele chegar nessa linha
        //ele deve sair do la�o independentemente de outras condi��es.
    }
    contador += 1;
}



// PS: � MUITO COMUM VER UM LOOP FOR DESSA MANEIRA:

// for(let i = 0 ; i < 3 ; i++){
//     if(listaDeDestinos[i] == destino){
//         destinoExiste = true;
//     }
// }