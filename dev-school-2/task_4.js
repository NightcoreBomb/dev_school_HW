function is_sosiska(producty){
    if (producty.length === 6
        && producty[0] ==="[" && producty[5]==="]"
        && producty[1] === producty[2]
        && producty[2] === producty[3]
        && producty[3] === producty[4]){
        return true
    }
    else{
        return false
    }

}


function unpackSausages (sklad) {
    let good_meat = []
    let shop = []
    for (let i = 0; i < sklad.length; i++) {
        let pack = sklad[i]
        // console.log("pack:" + pack)
        for (let b = 0; b < pack.length; b++){
            let c = pack[b]
            if( is_sosiska(c)){
                good_meat.push(c)
            }
            else {
                // console.log(c)
            }
        }

    }

    let payment = 0
    let copy = good_meat
    shop = []
    for (let i = 0; i<copy.length; i ++){
        if ((i+1) % 5 !== 0) {
            shop.push(copy[i])
        }
        else {
            payment++
        }
    }

    let shop_str=shop.join('')
    shop_str=shop_str.replace(/\[|\]/g,"");
    shop_str=shop_str.split('').join(' ')


    console.log("In shop: " + shop_str)
    console.log(typeof shop_str)
    console.log("Your payment: " + payment + ' sosika package')

    return shop_str

}

unpackSausages([ ['[1111]','[2222]', '[3333]', '[4444]', '[5555]'], ['[6666]','[7777]'], ['[8888]','[9999]'], ['[llll]', '[iiii]', '[rrrr]']])

    // let t = [[ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]
    // console.log(t.length)

