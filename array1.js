let numbers=[10,20,30,40,50,60,70,80,90,100]
for(let index=0; index<=numbers.length; index++){ //for loop
    console.log(numbers[index]);
}



let numbers=[10,20,30,40,50,60,70,80,90,100]
for(let index=0; index<=numbers.length-1; index++){ //for loop
    console.log(numbers[index]);
}



for (let number of numbers){  //for of loop
    console.log(number);
}