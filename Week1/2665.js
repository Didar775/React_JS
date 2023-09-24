var createCounter = function(init) {

    let x = init

  return { increment : function(){
     x += 1
     return  x
   },

   decrement : function(){
       x -= 1
       return x
   },

   reset : function(){
    x = init
    return x
   }
}
    
};

console.log(createCounter(5).decrement())