// Add value at a index of array
function addValueAtIndex(bani:number[],index:number,value:number):number[]{
bani.splice(index,0,value);
return bani;
}
let value = 31;
let index = 2 ;
let bani:number[]=[1,3,4,5,6,7,8,9,18];
console.log(addValueAtIndex(bani,index,value));
//while loop for 25 integers
let i=1;
while (i<=25) {
    console.log(i);
    i++
    
}
//print even number
let a:number =1;
while(a<=10){
    if(a%2==0){
        console.log(a);
        
        
    }
    a++;
}
//print factorial
function factorial(n:number):number{
    let result:number=1;

    while(n>=1){
     result*=n;
     n--;

    }
  return result;

}

let n=3;
console.log(factorial(n));
//remove negative no. from array 
function removeNegative(jibreel:number[]){
  for (let i = jibreel.length; i>=0; i--) {
    if(jibreel[i]<0){
      jibreel.splice(i,1);

    }
    
  }
  return jibreel;

}
//sum of elements of array
function SumofElementofArray(jibreel:number[]) {
  let i =0;
  let sum=0;
  while (i<jibreel.length) {
    
sum +=jibreel[i];
    i++;
  }
  return sum;
  
}
let jibreel:number[]=[2,3,-1,2,4,-8,9];
let Zumar:number[]=[2,4,5,6,7,8,5,43,1,2,4]

console.log("The array with no negative number is "+ removeNegative(jibreel));
console.log("The sum of element of array is "+ SumofElementofArray(Zumar));
//Covert array of C into F 
function CtoF(celcius:number[]) {
  let i =0;
  let F:number[]=[];
  while (i<celcius.length) {
   F [i] = ((celcius[i]*9/5)+32);
   
   
    i++;
    
  }
  return F;
}
let celcius:number[]=[12,34,54,67,98,65,21,34,56];
console.log("The all temperature is converted is to Farenhite "+ CtoF(celcius));
//shopping assignment 
function AddItem(shoppingList:string[]):string[] {
  shoppingList.push("Biscuit& cookies")
  return shoppingList;
}

function removeItem(shoppingList:string[]) {
shoppingList.splice(2,1);
  return shoppingList;
}
function updateItem(shoppingList:string[]) {
shoppingList.splice(3,1,"cupcake");
return shoppingList;
  
}
let shoppingList:string[]=["Juice","Beet root","lays","chocolate","Kitkat","coca cola"];
console.log(AddItem(shoppingList));
console.log(removeItem(shoppingList));
console.log(updateItem(shoppingList));

