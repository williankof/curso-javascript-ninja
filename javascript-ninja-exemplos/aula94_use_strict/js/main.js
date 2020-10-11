(function() {
    //'use strict';

    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log(new Person('Bispo', 'Matos', 35));
    console.log(this)

})();

