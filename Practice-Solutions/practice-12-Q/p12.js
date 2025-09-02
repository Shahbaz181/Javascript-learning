//For a given array of numbers, print the square of each value using the forEach loop

   let number = [9,11,15];

    number.forEach((num) =>{
    
        console.log("The square of the numbers is : ",num**2);
    });


   // Another method of for each loop

    let no =[25,30,35];

    let calcsq = (no) =>{
        console.log("The square of the numbers is : ",no*no); // or no**2
    };
    no.forEach(calcsq)