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

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = ['a', 'b', 'c', 'd', 'd', 'f', 'g'];

for(let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 'd' || arr2[i] === 'b') {
        continue;
    }
    console.log(arr2[i]);
}