// 1 1 2 3 5 8 13

function fib(n) {
    var first = 1;
    var second = 1;

    if(n<2) return first;

    for(var i=2; i<=n; i++) {
        var third = first + second;
        first = second;
        second = third;
    }
    return third;
}

console.log(fib(5000));