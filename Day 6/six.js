// Arrays and Arrays Methds 
{
let marks = [97,85,45,67,98,82,76];
console.log(marks);
console.log(marks.length);  // property 

let heroes =["Spider man","Ironman","Batman","Thor","Antman","Hulk"];
console.log(heroes);
console.log(heroes.length);
console.log(typeof heroes);
}


// array indices
let  score = [95,59,66,67,98,72,76];
console.log(score);
console.log(score[0]);
console.log(score);
score[3]=90;
console.log(score);

//Looping over an array   "index =idx "
//for loop 

let heroes =["Spider man","Ironman","Batman","Thor","Antman","Hulk"];
for(let i = 0;i<heroes.length;i++){
console.log(heroes[i]);
}

// for-of loop
{
    let cities = ["Hyderabad","Banglore","Kolkata","Mumbai","Shimla\n"];
    for( city of cities){
    console.log(city)
    }
}


{
    let cities = ["Delhi","Pune","Kerala"];
    for(city of cities){
     console.log(city.toUpperCase());  
    }
}

// Array Methods 

// 1) push()

    let fruits = ["Apple 🍎", "Banana 🍌" ,"Kiwi 🥝","Mango 🥭"];
    console.log(fruits);
    console.log(fruits.length);

    fruits.push("Cherry 🍒");
    console.log(fruits);

    //2) pop()

    let deleted = fruits.pop();
    console.log(fruits)
    console.log("Deleted fruit :  ",deleted);
    
    //3) tostring()

    let food = ["Burger","Noodles","Wraps","Mocktails"];
    console.log(food);
    console.log(food.toString());
    console.log(food);

    let marks = [56,75,85,53];
    console.log(marks);
    console.log(marks.toString());

    //4) concat()
{
    let food = ["Burger","Noodles","Wraps","Mocktails"];
    let ratings = [6,5,7,9];
    console.log(food.concat(ratings));
}

    //5) unshift()
{
    let marvelHeroes = ["IronMan","SpiderMan","Thor","Dr.Strange","Hulk"];
    marvelHeroes.unshift("Captain-America");
    console.log(marvelHeroes);
    
    //6) shift()
    let value = marvelHeroes.shift();
    console.log("Deleted Hero :" ,value);
    console.log(marvelHeroes);
}

    //7) slice()
{
    let mobileCompany = ["Oppo","Vivo","Oneplus","Samsung","Redmi","Realmi","LG","Infinix"];
    console.log(mobileCompany.slice(3,6));
}

//8)splice(add,remove,replace)
{
    let Laptopinfo =["Asus","16gb Ram","64xbit"];
    console.log(Laptopinfo.splice(0, 3 ,"Lenovo", "32gb ram", "128x bit"));
    console.log(Laptopinfo)
}
{
    let number =[1,2,3,4,5,6,7];
    number.splice(1, 2, 101, 102);
    console.log(number);
}
//add element 
{
    let cities = ["Delhi","Pune","Kerala"];
    cities.splice(1,1, "Hyderabad");
    console.log(cities)
} 
// Deleting element
{
    let mobileCompany = ["Oppo","Oneplus","Samsung","Redmi","Realmi"];
    mobileCompany.splice(3,2)
    console.log(mobileCompany);   
}
// Replacce element
{
    let heroes =["Spider man","Ironman","Batman","Thor","Antman","Hulk"];
    heroes.splice(2,0,"Dr.Strange");
    console.log(heroes);
}
