console.log("Trabalhando com atribui��o de vari�veis");

const idade = 29;
let nome = "Andressa";
const sobrenome = "Cantelli";

// Resultado: AndressaCantelli
console.log(nome + sobrenome);

// Resultado: Andressa Cantelli
console.log(nome, sobrenome);

// Resultado: Andressa Cantelli
console.log(nome + " " + sobrenome);

// Outra maneira de ecrever String � com CRASE: `
console.log(`Meu nome em string com crase � Andressa`);

// Para utilizar a INTERPOLA��O de vari�veis utiliza-se dentro da CRASE ${nomeDaVariavel}:
console.log(`Meu nome em interpola��o � ${nome} ${sobrenome}`);

// Sobrescrita de uma vari�vel CONST n�o � poss�vel atribuir novo valor � mesma chamando-a apenas, como:
nome = nome + sobrenome;
//ps: essa concatena��o est� SIMPLES, logo, ser� interpretada AndressaCantelli abaixo.

// Para sobrescreve-la, � necess�rio a palavra reservada LET, 
//pois � uma vari�vel comum, ent�o muda-se a vari�vel CONST p/ LET:
// const nome = "Andressa";
// let nome = "Andressa";
console.log(nome);

// RESUMO: LET -> Poss�vel reatribuir a vari�vel / CONST -> N�o � poss�vel mudar reatribuir


// � importante definir padr�es, sendo assim, vallores que n�o queremos que sejam reatribu�dos como NOME + SOBRENOME:
const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

// Onde usar um LET? Em uma vari�vel que QUEREMOS reatribuir valor, como um contador ou LOOP:
let contador = 0;
contador = contador + 1;
console.log(contador);






