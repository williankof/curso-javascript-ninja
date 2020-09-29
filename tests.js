/* 
let car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013

};

for(let i in car) {
    console.log(i);
}


for(let x in car) {
    console.log(x, '=>' ,car[x]);
}



for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i)

}
console.log('End of for')
*/

/*
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = ['a', 'b', 'c', 'd', 'd', 'f', 'g'];

for(let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 'd' || arr2[i] === 'b') {
        continue;
    }
    console.log(arr2[i]);
}
*/



/* 
arr.pop() - remove o ultimo item do array
arr.push() - adiciona no ultimo item

arr.unshift() - add no primeiro item
arr.shifit() - remove o primeiro item

arr.concact() - concatena valores ao array
arr.join('separador') - junta valores e aceita separador

# slice - Não altera o array principal
arr.slice(1) - vai do indice 1 até o final
arr.slice(1, 4) - vai do indice 1 até o 4.
arr.slice(-2) - pega os dois ultimos items

# splice - altera o array principal e remove/add items
arr.splice(3) - remove do item até o final
arr.splice(1, 3) - remove do indice 1 mais 3 indices pra frente.
arr.splice(1, 0, 'a') - adiciona a letra 'a' no indice 1.
arr.splice(2, 0, 'b', 'c', 'd') - add a letras nos indices 2, 3, e 4
arr.splice(1, 4, 'e', 'f', 'g', 'h', 'i') - remove do 1 + 4 e add a letras.

*/

/*
FOR EACH
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function(item, index, array) {
    console.log(item, index, array)
});
*/

/*
// EVERY
// Se todos os item do array forem menores que 5 retorna true
// every retorna false se ao menos uma verificação for false.
// Aqui retora false.
// Every só retorna false ou true.

let arr = [1, 2, 3, 4, 5, 6, 7];
let every = arr.every(function(item) {
    return item < 5;
});
console.log(every)
*/

/*
// SOME
// Faz o contrario de every.

let arr = [1, 2, 3, 4, 5, 6, 7];
let some = arr.some(function(item) {
    return item % 2 === 0;
});
console.log(some)
*/

/*
// MAP gera um novo array (ver de novo)
let arr = [1, 2, 3, 4, 5];
let map = arr.map(function(item, index, array) {
    return {index: index, item: item, array: array};
});
console.log(map)
*/

/*
// FILTER 
let arr = [1, 2, 3, 4, 5];
let filter = arr.filter(function(item, index, array) {
    return item > 2;
});
console.log(filter)
*/

/*
// MAP E FILTER JUNTOS
let arr = [1, 2, 3, 4, 5];

let double = arr.map(function(item) {
    return item + 10; // soma 10 em cada item
}).filter(function(item) {
    return item > 13;  // mostra só items maiores que 13
});
console.log(double)
*/

/*
// reduce()
// O zero no final é o valor inicial do acumulado (não é obrigatorio nesse caso)
// O acumador é um acumulador que vai somando com cada item do array.
let arr = [1, 2, 3, 4, 5];
let reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);

console.log(reduce)

// reduce() com strings (nesse caso o zero no final não se aplica)
let arr2 = ['W', 'i', 'l', 'l', 'i', 'a', 'm'];
reduce2 = arr2.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual
})
console.log(reduce2)

// A diferença entre o reduce() com map() e o every() é o os dois ultimos
// retornam um boolean.
*/

/*
// reduceRight() - O mesmo que o reduce() mas da esquerda para direita
let arr = ['W', 'i', 'l', 'l', 'i', 'a', 'm'];
var reduceRight = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
})
console.log(reduceRight)
*/

/*
// indexOf() - Busca por valor no array e retorna seu indice.
// se o indice não existir, retorna -1
// Bom para fazer verificações
// aceita parametro para o inicio da busca.
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(5)) // retorna o 4 que é o indice do valor 5.


// lastIndexOf() - Procura de traz para frente
let arr = [1, 2, 3, 5, 5, 5, 5, 5];
console.log(arr.lastIndexOf(5)) // 7 (pq ele para na primeira ocorrencia )
console.log(arr.indexOf(5)) // 3 (pq ele para na primeira ocorrencia)
*/

/*
// Array.isArray() - returna boolean se for um array.
// Lembre-se que o typeOf() retorna "object" para arrays.
let arr = [1, 2, 3, 4, 5]
console.log(Array.isArray(arr)) // true
console.log(Array.isArray({})) // false
*/

