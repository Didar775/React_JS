var once = function(fn) {
    
    return function(...args){

        let hasBeenCalled = false;
        return function(...args){
            if (!hasBeenCalled) {
          hasBeenCalled = true;
          return fn(...args);
        }
    }
        

        
        
    }
};