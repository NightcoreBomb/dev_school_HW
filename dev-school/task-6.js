function rebuild (number) {
    const hui1 = number.toString()
    const hui = hui1.split("")
    let n = 0
    let hui2 = hui
    for (let blya = 0; blya < hui.length; blya++) {
        for (let i = 0; i < hui.length - blya - 1; i++) {
            if (hui2[i+1] > hui2[i]) {
                n = hui2[i + 1]
                hui2[i + 1] = hui2 [i]
                hui2[i] = n
            }
        }

    }
    console.log(hui2)
}

rebuild(3294387121)
