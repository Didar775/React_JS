var map = function(arr, fn) {

    let newArr = []

    for (let i = 0; i < arr.length; i++)
    {
        newArr[i] = fn(arr[i],i)
      
    }

    return newArr
    
};


function pluseone(n){
    return n+1
}
console.log(map([1,2,3], pluseone))