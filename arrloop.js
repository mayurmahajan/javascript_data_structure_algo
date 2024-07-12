//stocks = [{"stock": "apple"}, {"stock": "microsoft"}, {"stock": "google"}]
//console.log(stocks.length)
//console.log(stocks.map((s)=>s["stock"]));

stocks = ["apple", "microsoft", "google"]

for(var i=0; i<stocks.length; i++){
   // console.log(i, stocks[i])
}

//function search(searchstring, arr) {
    //logic
  //  return true/false;
//}

//search("microsoft", stocks)


function search(searchstring, arr, indx) {
    if (indx >= arr.length) {
        return false;
    }
    if (arr[indx] == searchstring) {
        return true;
    }
    else {
        return search(searchstring, arr, indx + 1);
    }
}

stocks = ["apple", "microsoft", "google"]

var isfound = search("google", stocks, 0);


console.log(isfound);
