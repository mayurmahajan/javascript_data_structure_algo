function binarysearch(arr, searchnumber) {

    var low = 0;
    var high = arr.length - 1;

    while (low <= high) {

        var mid = Math.floor((low + high) / 2);
        var mid = Math.floor((high - (high-low)/2 ));

        if (arr[mid] == searchnumber) {
            return mid;
        } else if (arr[mid] < searchnumber) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

arr = [1, 2, 3, 4, 5, 6, 7, 100, 200, 400]

console.log(binarysearch(arr, 500));