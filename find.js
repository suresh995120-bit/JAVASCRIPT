let numbers = [11,7,8,99,101];
      /*let num = 99
      for(let i = 0; i < numbers.length-1; i++){
        if (numbers[i] ===num){
            console.log(num)
        }
        else{
            console.log("Not Found")
        }
        
}*/



//usinh finfd method
/*let num = numbers.find(number=>number===99)
console.log(num) */

// with find method
/*let num = numbers.find(number=>number===100)
if(num){
    console.log(num)
} else {
    console.log("Not Found")
}*/


//withot find method
let find = (value)=>{
    let numbers=[11,7,8,99,101,1055]
    let num=undefined;
    for(let i=0;i<=numbers.length-1;i++){
        if(numbers[i]===value){
            num=numbers[i];
        }
    }
return num;
}

let num=find(10551)
console.log(num)

