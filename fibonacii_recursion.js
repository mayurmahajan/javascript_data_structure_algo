// 1 1 2 3 5 8 13

function fib(arr, n) {
    if(n<0) return 0;
    if(n==0 || n==1) return 1;
    if(arr[n]!=undefined) return arr[n];
    var sum = fib(arr, n-2) + fib(arr, n-1);
    arr[n]=sum;
    return sum;
}

arr=[]
console.log(fib(arr, 4));