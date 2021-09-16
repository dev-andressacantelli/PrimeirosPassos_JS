console.log("Convers�o de Tipos");

console.log("ano" + 2021);

// Aqui temos uma CONCATENA��O, junta-se DUAS STRINGS, ou seja, ficar� 22.
console.log("2" + "2");

// A fun��o parseInt() analisa um argumento string e retorna um inteiro na base especificada,
//nesse caso converteu a string para n�mero INTEIRO, ent�o a string 2 mudou para n�mero 2, ficar� 4.
console.log(parseInt("2") + parseInt("2"));


// Quando tentamos fazer a divis�o neste caso, o interpretador altera a string para n�mero,
//pois ele entende que DIVIS�O s� faz sentido sendo um n�, diferente de + que pode ser uma CONCATENA��O,
//neste caso ficar� 5.
console.log("10" / "2");

// O interpretador tenta converter a string ANDRESSA p/ n�mero, pois utilzou-se a oper��o "/",
//por�m como a string n�o � um n�, o interpretador informa que tentou converter mas n�o conseguiu,
//ent�o teremos: NaN (not a number).
console.log("Andressa" / "2");

// Em JS, usa-se o ponto flutuante: "." para informar valores quebrados.
console.log(6.5);

// Se utilizado "," o interpretador n�o saber� que � um valor quebrado, ela ter� outra fun��o.
console.log(6,5);


