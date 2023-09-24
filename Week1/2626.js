var reduce = function(nums, fn, init) {

    let val = init

    if (nums.length == 0)
       return init
    else
      val = fn(init, nums[0])
       for (let i = 1; i < nums.length; i++)
    {
        val = fn(val, nums[i])

    }
     
    return val


    
};

fn = function sum(accum, curr) { 
    return accum + curr
}

console.log(reduce([1,2,3,4], fn, 0))