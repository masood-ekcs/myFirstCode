for (var num = 9999; num > 4999; num--) {
    var isPrime = 1
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = 0;
        }
    }
    if (isPrime) {
        console.log(num)
        //break
    }
}
