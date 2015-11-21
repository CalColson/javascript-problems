


var number = 600851475143;
var factors = [];
var prime = 0;

var divisibleBy = function(num) {
    var count = 2;
    while (count <= num) {
        if (num % count === 0) {
            return count;
        }
        count++;
    }    
};

var isPrime = function(num) {
    var count = 2;
    
    if (num === 2) {
        
        return true;
    }
    
    var root = Math.sqrt(num);
    while (count <= root) {
        if (num % count === 0) {
            return false;
        }
        count++;
    }
    
    return true;
    
};

while (number !== 1) {
    prime = divisibleBy(number);
    factors.push(prime);
    number = number / prime;   
}

for (var i = 0; i < factors.length; i++) {
    console.log(factors[i]);
}

for (var i = 0; i < factors.length; i++) {
    console.log(isPrime(factors[i]));
}