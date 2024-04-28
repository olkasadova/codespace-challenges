
let show = name=> "Hi " +name +"!";
console.log(show("John"));
console.log(show("Olha"));


let isEven=num=>num % 2 === 0;
console.log(isEven(7));
console.log(isEven(8));


let counterFunc=counter=>{
if (counter > 100) {
    counter = 0;
    } else {
    counter++;
    }
    
    return counter;
}
console.log(counterFunc(10));

let nameAge=(name,age)=>{
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
}

let printOnly=()=>console.log("printing");

let sum=(num1,num2)=>num1+num2;
console.log(sum(3,4));
