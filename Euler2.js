var first = 1;
var second = 2;
var sum = 0;
var limit = 4000000;

while (second < limit) {
    if (second % 2 === 0) {
        sum += second;
    }
    var next = first + second;
    first = second;
    second = next;
}

console.log(sum);