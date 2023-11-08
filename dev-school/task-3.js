function Count (V){
    let sum = 0;
    let element = 0;
    const litrs = V
    if (V<0)
        console.log(-1)
    else{
        for (let i = 1; i <= V; i++){
            /*
            console.log("Litrs is - " + litrs)
            console.log("Element is - " + element)
            console.log("V is - " + V)
            console.log("Sum is - " + sum)
            console.log("")

             */
            if (V - i **  3 >= 0 && litrs - element > 0){
                V -=  i ** 3
                sum += 1
                element += i ** 3
            }
        }
        if (litrs - element == 0){
            console.log("Sum is " + sum)
        }
        else {
            console.log(-1)
        }
    }


}

Count(101)