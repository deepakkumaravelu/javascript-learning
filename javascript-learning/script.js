
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
// var a=prompt("enter you name:");
// var b=prompt("enter your partner's name:");
// var n=Math.random();
// if((a.toLowerCase().charAt(0)=="d"||a.toLowerCase().charAt(0)=="p")&&(a.toLowerCase().charAt(0)=="d"||a.toLowerCase().charAt(0)=="p")){
//     console.log("love percentage= "+ (Math.floor(n*10)+91)+"% you're lucky ");
// }else{
//     var per= (Math.floor(n*100)+1);
//     if(per>=90){
//         console.log("love percentage= "+per+"% you're lucky ");
//     }else if(per>=80&&per<90){
//         console.log("love percentage= "+per+"% god's gift ");
//     }else if(per>=70&&per<80){
//         console.log("love percentage= "+per+"% happy life ");
//     }else{
//         console.log("love percentage= "+per+"%");
//     }
// }
// var output=[];
// var i=0;
// function fizbuz(){
//     if(i%3==0&&i%5==0){
//         output.push("fizbuz");
//     }else if(i%3==0){
//         output.push("fiz");
//     }else if(i%5==0){
//         output.push("buz");
//     }else{
//         output.push(i);
//     }
//     i++;
//     console.log(output);
// }
// fizbuz();

// function fibonacciGenerator (n) {
//         var n1=0;
//         var n2=1;
//         var n3;
//         var arr=[];
//         if(n==1){
//             arr.push(n1);
//         }else if(n==2){
//             arr.push(n1);
//             arr.push(n2);
//         }else{
//         for(var i=2;i<n;i++){
//             if(i==2){
//                 arr.push(n1);
//                 arr.push(n2);
//             }
//          n3=n1+n2;
//          n1=n2;
//          n2=n3;
//          arr.push(n3);
//         }
//         }
//         return arr;
  
//     }
//     console.log(fibonacciGenerator(10));