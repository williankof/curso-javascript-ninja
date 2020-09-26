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

// MAP E FILTER JUNTOS
let arr = [1, 2, 3, 4, 5];

let double = arr.map(function(item) {
    return item + 10; // soma 10 em cada item
}).filter(function(item) {
    return item > 13;  // mostra só items maiores que 13
});
console.log(double)
