for(i=0; i<11; i++) {
 //  console.log(i);
}

function print(start, end)
{
    if(start>end) {
        return;
    }
    //console.log(start);
    print(start+1, end);
}


print(0, 10000)