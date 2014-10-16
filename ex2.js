// // ## Return a list of fibonacci numbers 
// // that go up to but not beyond 
// // the maximum number provided
// def fibonacci_set(max):
//     if max > 1:
//         fib_list = [1]
//         current_fib = 1
//         while current_fib < max:
//             fib_list.append(current_fib)
//             current_fib = fib_list[-1] + fib_list[-2]

//         return fib_list
//     else:
//         return [1, 1]

// ## Tell me if a number is even
// def even(n):
//     return n % 2 == 0

// print sum(filter(even,fibonacci_set(4000000)))

function filter(num_list)
{
    var to_add = []

    for (var n = 0; n < num_list.length; n++)
    {
        if (num_list[n] % 2 === 0)
        {
            to_add.push(num_list[n]);
        }
    }
    return to_add;
}


function fibonacci_set(max)
{
    if (max > 1) 
    {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) 
        {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length -1] + fib_list[fib_list.length -2];
        }
        return fib_list;
    }
    else {
        return [1, 1];
    }
}

function sum(num_list)
{
    var sum = 0
    for (var n = 0; n < num_list.length; n++)
    {
        sum += num_list[n];
    }
    return sum;
}

console.log(filter(fibonacci_set(100)));