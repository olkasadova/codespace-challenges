
let reverseString=name=>{
    let reversName="";
    for (i=0;i<name.length;i++){
        index=name.length-1-i;
        reversName +=name[index];
    } 
    return (reversName);
}

console.log(reverseString("John"));

let reverseArray=array=>{
    let reverseArray=[];
    for (i=array.length-1;i>=0;i--){
        reverseArray.push(array[i]);
    }
    return(reverseArray);
}

console.log(reverseArray(["I", "like", "JavaScript"]));
console.log(reverseArray([5,4,3,2,1]));


let mostExpensiveItem=items=>{
   
    max=Math.round(items[0].price*items[0].stock,1);
    max_index=0;
    //calculate total cost for each item and log this value in a new array
    for (i=0;i<items.length;i++){
        total=Math.round(items[i].price*items[i].stock,1);
        //find the max value
            if (max<total){
                max=total;
                max_index=i;
            }
    }
    return(items[max_index]);
}
console.log(mostExpensiveItem([
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]));