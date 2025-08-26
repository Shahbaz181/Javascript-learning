
//Frist Method 

{
let score = 66;
if (score>=90 && score<=100){
    console.log("Grade : A ");
}else if(score>=80 && score<=89){
    console.log("Grade : B");
}else if(score>=70 && score<=79){
    console.log("Grade : C");
}else if(score>=60 && score<=69){
    console.log("Grade : D");
}else if(score>=50 && score<=59){
    console.log("Grade : F");
}else if(score>=25 && score<=49){
    console.log("Grade : E");
}else if(score>=0 && score<=24){
    console.log("Fail!!");
}else{
    console.log("Invalid Score , Pease put valid score")
}

};


//Second Method 

{
    let score = prompt("Enter Your Score");
    let grade;

    if (score>=90 && score<=100){
        grade = "A";
    }else if(score>=80 && score<=89){
        grade = "B";
    }else if(score>=70 && score<=79){
        grade = "C";
    }else if(score>=60 && score<=69){
        grade = "D";
    }else if(score>=50 && score<=59){
        grade = "E";
    }else if(score>=25 && score<=49){
        grade = "F";
    }else if(score>=0 && score<=24){
        grade ="Fail";
    }
    console.log("According to your score your grade was : ",grade);
}
