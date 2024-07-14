function bubble_sort(arr) {

    var iterationNumber = 0;

    while (iterationNumber < arr.length) {
        var first = 0;
        var second = 1;

        var swapgotexecuted=false;
        while (second < arr.length-iterationNumber) {
            if (arr[first] > arr[second]) {
                swapgotexecuted=true;
                var temp = arr[first];
                arr[first] = arr[second];
                arr[second] = temp;
            }
            first++;
            second++;
        }

        if(swapgotexecuted==false) {
            return arr;
        }

        iterationNumber++;
    }
    return arr;
}

arr = [1,2,5,7,8,9];
console.log(bubble_sort(arr));

