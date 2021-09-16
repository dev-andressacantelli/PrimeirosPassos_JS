console.log("Conversão de Tipos");

console.log("ano" + 2021);

// Aqui temos uma CONCATENAÇÃO, junta-se DUAS STRINGS, ou seja, ficará 22.
console.log("2" + "2");

// A função parseInt() analisa um argumento string e retorna um inteiro na base especificada,
//nesse caso converteu a string para número INTEIRO, então a string 2 mudou para número 2, ficará 4.
console.log(parseInt("2") + parseInt("2"));


// Quando tentamos fazer a divisão neste caso, o interpretador altera a string para número,
//pois ele entende que DIVISÃO só faz sentido sendo um n°, diferente de + que pode ser uma CONCATENAÇÃO,
//neste caso ficará 5.
console.log("10" / "2");

// O interpretador tenta converter a string ANDRESSA p/ número, pois utilzou-se a operção "/",
//porém como a string não é um n°, o interpretador informa que tentou converter mas não conseguiu,
//então teremos: NaN (not a number).
console.log("Andressa" / "2");

// Em JS, usa-se o ponto flutuante: "." para informar valores quebrados.
console.log(6.5);

// Se utilizado "," o interpretador não saberá que é um valor quebrado, ela terá outra função.
console.log(6,5);


