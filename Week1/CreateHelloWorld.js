
var createHelloworld = function() {
    return function(...args){
        return "Hello world"
    }
}

console.log(createHelloworld([1,3,3])())

