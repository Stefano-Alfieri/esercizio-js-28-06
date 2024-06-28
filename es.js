//es1
console.log("es 1");
for (let i=1; i<=20;i++){
        if (i%2==1){
        console.log(i);
        }
    
}
console.log("es 2");
for (let i=1; i<=50;i++){
    if (i%3==0&&i%5==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Buzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else{
        console.log(i);
    }
}
console.log("es 3");
for(let i=1; i<=10;i++){
    console.log(i*7);
}
console.log("es 4");
let array= [1,3,5,7,9,3,5,40,2];
let max=array[0];
for(let i=0; i<= array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log("Il numero massimo nell'array è: " + max);
document.write("l'array è "+ array+". Il numero massimo nell'array è: "+ max);