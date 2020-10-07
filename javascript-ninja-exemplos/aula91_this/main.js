(function() {
    let myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;  // this em objetos retorna o objeto
        }  
    };
    console.log('this em objetos:', myObject)
    //console.log(myObject.init());


    function myFunction() {
        return this  // this em funções retorna o obj global window.
    }

    //console.log(myFunction() === window);
    console.log('this em funções:', myFunction())


    console.log()
    let newObject = new Object();  // new Object cria um novo objeto. É o
    // contrutor padrão do JS. (acho que é tipo classe)

    console.log(newObject)  // retorna um obj vazio. Ele apenas foi criado.

    console.log('##########################################')
    // Criando um contrutor (acho q é uma classe)
    // O this em js é como se fosse o self em py
    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    let c1 = new MyConstructor();
    console.log(c1)
    console.log(c1.prop1)
    console.log(c1.prop2)
    console.log()


})();