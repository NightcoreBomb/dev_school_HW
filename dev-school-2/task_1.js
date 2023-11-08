
function largestRadialSum (n,d) {
    let room_count = n.length / d

    let combo = []
    for (let l = 0; l < n.length / d; l++) {
        let mas = n[l]
        combo.push(mas)
        // console.log(l)
    }
    for (let l = n.length / d; l < n.length; l++) {
        let mas = n[l]
        combo[l % (n.length / d)] += mas
        // console.log(l)
    }

    let ombo = combo
    let k = 0
    for (let i = 0; i < combo.length; i++) {
        for (let j = 0; j < combo.length - i - 1; j++) {
            if (ombo[j + 1] < ombo[j]) {
                k = ombo[i + 1]
                ombo[j + 1] = ombo [j]
                ombo[i] = k
            }
        }

    }
    console.log('max: ' + ombo[combo.length-1])
    return ombo[combo.length-1]

}
    // // console.log(combo)
    // console.log('max: ' + ombo[combo.length-1])

largestRadialSum([1,3,6,7,5,9], 2)

