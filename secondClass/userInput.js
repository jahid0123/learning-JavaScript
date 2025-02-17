// Simple Grading System using conditional Statement

let marks = parseInt(prompt("Enter your marks: "));

if(marks<0 || marks>100){
    console.log("You enter invalid number! Please enter valid number!!");
}else{

    if(marks<=100 && marks >=80){
        console.log("Congrats! You got A+");
    }else if(marks>=70){
        console.log("Congrats! You got A");
    }else if(marks>=60){
        console.log("Congrats! You got A-");
    }else if(marks>=50){
        console.log("Congrats! You got B");
    }else if(marks>=40){
        console.log("Congrats! You got C");
    }else if(marks>=33){
        console.log("Congrats! You got D");
    }else if(marks>=0 && marks<=32){
        console.log("Sorry! You are fail in your exam!!!");
    }
}
