
//for of loop

    let price=[250,645,300,900,50];
    console.log(`The original price of items is ${price}`);
    let i =0;
    for ( let value of price){
    let offer = value/10;
    price[i]=price[i]- offer;
    console.log(`value after offer ${price[i]}`);
    i++;
    }


// Another method  
 let item =[290,845,400,560,80];
 for(let i=0;i<item.length; i++){
    let offer = item[i]/10;
    item[i]-= offer;
 }
 console.log(item);