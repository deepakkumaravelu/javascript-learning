
// var nam=prompt("enter your name");
// alert("you have written : hello "+ nam.slice(0,1).toUpperCase()+nam.slice(1,nam.length).toLowerCase());
// var humanAge,dogAge;
// dogAge=prompt("enter dog age");
// alert("human age is "+((dogAge-2)*4+21));

// function getMilk(amount) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("buy "+Math.floor(amount/1.5)+" bottles");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// return amount%1.5;
//   }
//  console.log(getMilk(4));
//  function bmiCalculator(weight,height) {
//     return weight/Math.pow(height,2);
// }
// console.log(Math.round(bmiCalculator(65,1.8)));
var a=prompt("enter you name:");
var b=prompt("enter your partner's name:");
var n=Math.random();
if((a.toLowerCase().charAt(0)=="d"||a.toLowerCase().charAt(0)=="p")&&(a.toLowerCase().charAt(0)=="d"||a.toLowerCase().charAt(0)=="p")){
    console.log("love percentage= "+ (Math.floor(n*10)+91)+"% you're lucky ");
}else{
    var per= (Math.floor(n*100)+1);
    if(per>=90){
        console.log("love percentage= "+per+"% you're lucky ");
    }else if(per>=80&&per<90){
        console.log("love percentage= "+per+"% god's gift ");
    }else if(per>=70&&per<80){
        console.log("love percentage= "+per+"% happy life ");
    }else{
        console.log("love percentage= "+per+"%");
    }
}
