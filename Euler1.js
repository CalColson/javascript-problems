var sumCounter = function(big, little) {
    var sum = 0;
    var counter = little;
    while (counter < big) {
        sum += counter;
        counter += little;
    }
    return sum;
    
};

var sumCounterMod = function(big, little) {
    var sum = 0;
    var counter = little;
    while (counter < big) {
        if (counter % 5 !== 0) {
        sum += counter;
        }
        counter += little;
    }
    return sum;
    
};

// without the multiples of 5
var threeSum = sumCounterMod(1000, 3);

var fiveSum = sumCounter(1000, 5);

var totSum = threeSum + fiveSum;

console.log(totSum);