function findEvenIndex(number_list) {
    for (let i = 0; i < number_list.length; i++) {
        let first_element = 0;
        let second_element = 0;
        for (let j = 0; j < i; j++) {
            first_element += number_list[j];
        }
        for (let k = i + 1; k < number_list.length; k++) {
            second_element += number_list[k];
        }
        if (first_element === second_element) {
            console.log(i);
            return i
        }
    }

    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, -10, 15, 1, 9, 6]))


