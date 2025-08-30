//Qs 8 : For a given array with marks of students ➡️[85,97,44,37,76,60].<br> Find the average marks of the entire class

let marks = [85,97,44,37,76,60];
sum =null;
        //for of loop
        
for (let value of marks){
    sum += value    //sum = sum + value;
}

    //avg = sum of given numbers/total numbers

let avg = sum/marks.length;
console.log(sum)
console.log(`Avg marks of the class = ${avg}`);