let numbers=[11,8,31,1055,232];
//collect all even numbers
//using  without filter and use for
/*let even_no=[];
for(let num of numbers){
    if(num%2===0){
        even_no.push(num);
    }
}
console.log(even_no)*/

//by using filter as fatarrow
/*let evens = numbers.filter((num) =>{
    return num%2===0;

})
console.log(evens)*/

//another way

let evens = numbers.filter(num=>num%2===0)
console.log(evens)