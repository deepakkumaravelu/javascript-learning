//week 2 day 1:
//1. Objects and methods, “this”:
//Task 1:
// var book={
//     title:"harry potter",
//     author:"james bond",
//     yearPublished:2002,
//     getSummary:function(){
//         return " Title:"+this.title+",Author: "+this.author+", year published: "+this.yearPublished;
//     }
// }
// console.log(book.getSummary());
//Task 2:
// var book={
//     title:"harry potter",
//     author:"james bond",
//     yearPublished:2002,
//     getSummary:function(){
//         return " Title:"+this.title+",Author: "+this.author+", year published: "+this.yearPublished;
//     },
//     age:function(){
//         return `Age of book:${2023-this.yearPublished}`;
//     }
// }
// console.log(book.age());
//Task 3:
// var calculator={
//     a:10,
//     b:20,
//     add:function(){
//         return `add=${this.a+this.b}`;
//     },
//     subtract:function(){
//         return `subtract=${this.a-this.b}`;
//     },
//     multiply:function(){
//         return `multiply=${this.a*this.b}`;
//     },
//     divide:function(){
//         return `divide=${this.a/this.b}`;
//     }
    
// }
// console.log(calculator.add());
// console.log(calculator.multiply());
// console.log(calculator.divide());
// console.log(calculator.subtract());
//Task 4:
// var calculator={
//     add:function(a=10,b=12){
//         return `add=${Number(a)+Number(b)}`;
//     },
//     subtract:function(a=10,b=12){
//         return `subtract=${a-b}`;
//     },
//     multiply:function(a=10,b=12){
//         return `multiply=${a*b}`;
//     },
//     divide:function(a=10,b=12){
//         return `divide=${a/b}`;
//     },
//     history:[]
// }
// var a=prompt("enter first number");
// var b=prompt("enter second number");
// calculator.history.push(calculator.add(a,b));
// calculator.history.push(calculator.multiply(a,b));
// calculator.history.push(calculator.divide(a,b));
// calculator.history.push(calculator.subtract(a,b));
// console.log(calculator.add());
// console.log(calculator.multiply());
// console.log(calculator.divide());
// console.log(calculator.subtract());
// calculator.history.push(calculator.add());
// calculator.history.push(calculator.multiply());
// calculator.history.push(calculator.divide());
// calculator.history.push(calculator.subtract());
// console.log(calculator.history);
// Task 5:
// var person={
//     age:10,
//     incAge:function(a){
//         this.age=this.age+a;
//     },
//     decAge:function(a){
//         if(a>this.age){
//             console.log('decAge is greater than age..');
//         }else{
//         this.age=this.age-a;
//         }
//     }
   
// }
// console.log(person.age);
// person.incAge(10);
// console.log(person.age);
// person.decAge(233);
// console.log(person.age);
// Task 6:
// var person={
//     nam:"hari",
//     age:10,
//     incAge:function(a){
//         this.age=this.age+a;
//     },
//     decAge:function(a){
//         if(a>this.age){
//             console.log('decAge is greater than age..');
//         }else{
//         this.age=this.age-a;
//         }
//     },
//     greet:function(){
//         console.log(`name of the person is ${this.nam}`);
//     }
   
// }
// person.greet();
// Task 7:
// var circle={
//     radius:12,
//     area:function(){
//         return `area of circle:${Math.round(Math.PI*this.radius*this.radius)}`;
//     }
// }
// console.log(circle.area());
// Task 8:
// var circle={
//     radius:12,
//     dia:function(){
//         return `dia of circle:${Math.round(2*this.radius)}`;
//     },
//     circum:function(){
//         return `circumference of circle:${Math.round(2*Math.PI*this.radius)}`;
//     }
// }
// console.log(circle.circum());
// console.log(circle.dia());
// Task 9&10:
// var account={
//     name:'deepak',
//     balance:12000,
//     deposite:function(a){
//         this.balance=this.balance+a;
//         console.log(`deposited amount: ${a} \nbalance ${this.balance}`);
//     },
//     withdraw:function(a){
//         if(a>this.balance){
//             console.log("insufficient balance");
//         }else{
//         this.balance=this.balance-a;
//         console.log(`withdrawal amount: ${a} \nbalance ${this.balance}`);
//         }
//     }
// }
// console.log(account.name);
// console.log(account.balance);
// account.deposite(20000);
// console.log(account.balance);
// account.withdraw(20000);
// console.log(account.balance);
