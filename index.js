//Part 1 Fizz Buzz

for (let i = 0; i < 100; i++) {
    if(i % 3==0 && i % 5 == 0){
        console.log('fizzbuzz')
    }else if(i % 5 == 0){
        console.log('buzz')
    }else if(i % 3 == 0){
        console.log('fizz')
    }else{
        console.log(i)
    }
    
    
}
//Part 2 Prime Time
let n = 4; 

while (true) {
    let primeNumber = true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            primeNumber = false;
            break;
        }
    }
    if (primeNumber && n > 1) {
        console.log("Next prime number:", n);
        break;
    }
    n++;
}


//Part 3 Feeling Loopy
const cvs = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

for(i = 0; i <= cvs.length; i++){
    console.log(cvs.slice(23))
}

    