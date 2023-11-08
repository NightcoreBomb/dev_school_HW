function high_and_low (list) {
    const numbers = list.split(" ")
    let max_num = numbers[0];
    let min_num = numbers[0];
    // console.log(numbers)
    for (let n = 0; n < numbers.length; n++ ) {
        if (numbers[n] > max_num) {
            max_num = numbers[n]
        }
        if (numbers[n] < min_num) {
            min_num = numbers[n]
        }
    }
    console.log("Your max is - " + max_num + "|" + " Your min is -" + min_num )
}

high_and_low("1 2 3 4 5 6 7 8")
