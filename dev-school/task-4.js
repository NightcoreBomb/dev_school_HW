function Prime_number (n) {
    let sum = 1;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum > 2)
        console.log("It`s not a prime number")
    else {
        console.log("It`s a prime number")
    }
}

Prime_number(97)
