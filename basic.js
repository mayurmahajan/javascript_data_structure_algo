// print
console.log("first class");

for(i=0; i<11; i++) {
    if(i%2==0) {
      //  console.log(i, " : even")
    } else {
      //  console.log(i, " : odd")
    } 
}

var j=0;
while(j<10) {
  //  console.log(j)
    j++;
}

var k=0;
do {
   // console.log(k);
    k++;
} while(k<10);


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

