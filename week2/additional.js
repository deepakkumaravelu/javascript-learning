//map()
const celsius = [0, 10, 20, 30];
function toFahren(temp){
     return temp=(temp*9/5)+32;
}
const fahren=celsius.map(toFahren);
console.log(fahren);
// Task 1
var arr=[2,4,6,8,1];
const sqr=(num)=>num*num;
var arrs=arr.map(sqr);
console.log(arrs);
//filter()
//Task 2
var arr1=[2,4,6,8,1,3,5,7,9];
var even=arr1.filter(n=>n%2==0);
console.log(even);
//reduce()
//Task 3
const propr = [1, 2, 3, 4, 5];
const sum = propr.reduce((acc, current) => acc + current, 0);
console.log("total :"+sum);
//Task 4
var nam=["rishi","danush","deepak","hari"];
const len=(name)=>name.length;
var name1=nam.map(len);
console.log(name1);
//Task 5
nam.splice(2,1,"replaced!");
console.log(nam);
//Task 6
var arr4=[2,4,6,8];
console.log(arr4.slice(1,4));
//Task 7
var nam1=["arishi","Anush","deepak","hari"];
var nama=nam1.filter((n)=>n.toLowerCase().charAt(0)=="a");
console.log(nama);
//Task 8
var scr=[10,80,40,88,23,99];
var scr2=(s)=>{
    if(s>=90&&s<=100){
        return "A";
    }else if(s>=80&&s<90){
        return "B";
    }else{
        return "C";
    }
}
var scr1=scr.map(scr2);
console.log(scr1);
//Task 9
var age=[1,2,3,4,5];
var sum1=age.reduce((a,c)=>a+c,0);
var avg=sum1/age.length;
console.log(avg);
//Task 10
var nam5=["arishi","Anush","deepak","hari"];
nam5.splice(2,2,"banana","apple");
console.log(nam5);