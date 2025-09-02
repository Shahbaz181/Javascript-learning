// Create a function using the "function" keyword that takes a  String as an argument returns the number of vowels in the string.
function countvowels(str){
     count =0;
    for(const char of str){
        if (char ==="a"  || char ==="e" || char ==="i" || char ==="o" || char ==="u" ||
             char ==="A" || char ==="E" || char ==="I" || char ==="O" || char ==="U" ){
            count++;
        } 
    }

return count;
}

//    b) create an arrow to perform the same task.

const countvow = (str) =>{
    count =0;
    for(const char of str){
        if (char ==="a"  || char ==="e" || char ==="i" || char ==="o" || char ==="u" ||
             char ==="A" || char ==="E" || char ==="I" || char ==="O" || char ==="U" ){
            count++;
        } 
    }

return count;
}