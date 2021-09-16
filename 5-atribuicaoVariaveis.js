console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
let nome = "Andressa";
const sobrenome = "Cantelli";

// Resultado: AndressaCantelli
console.log(nome + sobrenome);

// Resultado: Andressa Cantelli
console.log(nome, sobrenome);

// Resultado: Andressa Cantelli
console.log(nome + " " + sobrenome);

// Outra maneira de ecrever String é com CRASE: `
console.log(`Meu nome em string com crase é Andressa`);

// Para utilizar a INTERPOLAÇÃO de variáveis utiliza-se dentro da CRASE ${nomeDaVariavel}:
console.log(`Meu nome em interpolação é ${nome} ${sobrenome}`);

// Sobrescrita de uma variável CONST não é possível atribuir novo valor à mesma chamando-a apenas, como:
nome = nome + sobrenome;
//ps: essa concatenação está SIMPLES, logo, será interpretada AndressaCantelli abaixo.

// Para sobrescreve-la, é necessário a palavra reservada LET, 
//pois é uma variável comum, então muda-se a variável CONST p/ LET:
// const nome = "Andressa";
// let nome = "Andressa";
console.log(nome);

// RESUMO: LET -> Possível reatribuir a variável / CONST -> Não é possível mudar reatribuir


// É importante definir padrões, sendo assim, vallores que não queremos que sejam reatribuídos como NOME + SOBRENOME:
const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

// Onde usar um LET? Em uma variável que QUEREMOS reatribuir valor, como um contador ou LOOP:
let contador = 0;
contador = contador + 1;
console.log(contador);






