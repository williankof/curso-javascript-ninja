

function sum() {
    return 1 + 2;
}
console.log(sum());


var sum2 = function() {
    return 3 + 2;
};
console.log(sum2());

var sum3 = function otherSum() {
    return 5 + 8;
};
console.log(sum3());
console.log(sum3.name);
console.log();

let obj = {
    prop1: function() {return 1 + 2;},
    prop2: function() {return 10 + 10;}
}
console.log(obj.prop2());


(function() {
    console.log(5 + 5);
})();


