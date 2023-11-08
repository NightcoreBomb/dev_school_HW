// let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function VigenèreCipher(key, plainText, alphabet){
    let leters = alphabet.split('')
    let key_let = key.split('')
    let code_key = []
    let code_text = []
    let code_res =[]
    let final_text = []
    let space_index = []
    let text_out_space =plainText.replace(/\s/g, '')
    let text_let = text_out_space.split('')
    let key_for_text = key.repeat(text_out_space.length)
    if (key_for_text.length > plainText.length) {
        key_for_text = key_for_text.substr(0, text_out_space.length);
    }
    console.log(key_for_text.length, 'bim')
    for (let i = 0; i<key_for_text.length;i++){
        if (alphabet.indexOf(key_for_text[i]) !== -1) {
            code_key.push(alphabet.indexOf(key_for_text[i])+1)
        }
    }
    console.log(code_key.length, key_let.length)

    for (let i = 0; i<text_out_space.length;i++){
        if (alphabet.indexOf(text_let[i]) !== -1) {
            code_text.push(alphabet.indexOf(text_let[i])+1)
        }
    }

    for (let i = 0; i < code_text.length; i++) {
        code_res.push(code_text[i] + code_key[i])
        if (code_res[i] > 26) {
            code_res[i] = code_res[i] - 26
        }
    }



    for (let i = 0; i < plainText.length; i++){
        if (plainText[i] === ' '){
            space_index.push(i)
        }
    }
    for (let i = 0; i<code_res.length;i++){
        final_text.push(leters[code_res[i]-2])
        console.log(final_text)
    }

    for (let i= 0; i < plainText.length; i++){
        for (let j =0; j<space_index.length; j++){
            if (i == space_index[j]) {
                final_text.splice(i, 0, ' ')
                // console.log(final_text)
            }
        }
    }


    final_text=final_text.join('')

    console.log(code_key, code_text, code_res)
    console.log(code_key.length, code_text.length, code_res.length)
    console.log(10%10)
    console.log(code_key[1]+code_text[1])
    console.log(space_index)
    console.log(final_text)
    return final_text
}

class Vigenère{
    abc
    key
    text

    constructor(key, text, abc) {
        this.abc=abc
        this.key=key
        this.text=text
    }
    encode (){
        return VigenèreCipher(this.key, this.text, this.abc )
    }
    decode (){

    }
}

// VigenèreCipher('helloworld', 'fuc ki yo uz rkdsfhsdjfsdjfasjd ')
let a = new Vigenère('lowoddasdasrld',   'fuc ki yo uz rkdsfhsdjfsdjfasjd ', 'abcdefghijklmnopqrstuvwxyz')
console.log(a.encode())




// let alphabet = 'abcdefghijklmnopqrstuvwxyz'

// function VigenèreCipherEncode(key, alphabet){
//     let leters = alphabet.split('')
//     let key_let = key.split('')
//     let code_key = []
//     let code_text = []
//     let code_res =[]
//     let final_text = []
//     let space_index = []
//     let text_out_space =plainText.replace(/\s/g, '')
//     let text_let = text_out_space.split('')
//     let key_for_text = key.repeat(text_out_space.length)
//     if (key_for_text.length > plainText.length) {
//         key_for_text = key_for_text.substr(0, text_out_space.length);
//     }
//     console.log(key_for_text.length, 'bim')
//     for (let i = 0; i<key_for_text.length;i++){
//         if (alphabet.indexOf(key_for_text[i]) !== -1) {
//             code_key.push(alphabet.indexOf(key_for_text[i])+1)
//         }
//     }
//     console.log(code_key.length, key_let.length)
//
//     for (let i = 0; i<text_out_space.length;i++){
//         if (alphabet.indexOf(text_let[i]) !== -1) {
//             code_text.push(alphabet.indexOf(text_let[i])+1)
//         }
//     }
//
//     for (let i = 0; i < code_text.length; i++) {
//         code_res.push(code_text[i] + code_key[i])
//         if (code_res[i] > 26) {
//             code_res[i] = code_res[i] - 26
//         }
//     }
//
//
//
//     for (let i = 0; i < plainText.length; i++){
//         if (plainText[i] === ' '){
//             space_index.push(i)
//         }
//     }
//     for (let i = 0; i<code_res.length;i++){
//         final_text.push(leters[code_res[i]-2])
//         console.log(final_text)
//     }
//
//     for (let i= 0; i < plainText.length; i++){
//         for (let j =0; j<space_index.length; j++){
//             if (i == space_index[j]) {
//                 final_text.splice(i, 0, ' ')
//                 // console.log(final_text)
//             }
//         }
//     }
//
//
//     final_text=final_text.join('')
//
//     console.log(code_key, code_text, code_res)
//     console.log(code_key.length, code_text.length, code_res.length)
//     console.log(10%10)
//     console.log(code_key[1]+code_text[1])
//     console.log(space_index)
//     console.log(final_text)
//     return final_text
// }
// function VigenèreCipherDecode(key, plainText, alphabet) {
//     let leters = alphabet.split('')
//     let key_let = key.split('')
//     let code_key = []
//     let code_text = []
//     let code_res =[]
//     let final_text = []
//     let space_index = []
//     let text_out_space =plainText.replace(/\s/g, '')
//     let text_let = text_out_space.split('')
//     let key_for_text = key.repeat(text_out_space.length)
//     if (key_for_text.length > plainText.length) {
//         key_for_text = key_for_text.substr(0, text_out_space.length);
//     }
//     console.log(key_for_text.length, 'bim')
//     for (let i = 0; i<key_for_text.length;i++){
//         if (alphabet.indexOf(key_for_text[i]) !== -1) {
//             code_key.push(alphabet.indexOf(key_for_text[i])+1)
//         }
//     }
//     console.log(code_key.length, key_let.length)
//
//     for (let i = 0; i<text_out_space.length;i++){
//         if (alphabet.indexOf(text_let[i]) !== -1) {
//             code_text.push(alphabet.indexOf(text_let[i])+1)
//         }
//     }
//
//     for (let i = 0; i < code_text.length; i++) {
//         code_res.push(code_text[i] - code_key[i])
//         if (code_res[i] < 1) {
//             code_res[i] = code_res[i] + 26
//         }
//     }
//
//
//
//     for (let i = 0; i < plainText.length; i++){
//         if (plainText[i] === ' '){
//             space_index.push(i)
//         }
//     }
//     for (let i = 0; i<code_res.length;i++){
//         final_text.push(leters[code_res[i]-2])
//         console.log(final_text)
//     }
//
//     for (let i= 0; i < plainText.length; i++){
//         for (let j =0; j<space_index.length; j++){
//             if (i == space_index[j]) {
//                 final_text.splice(i, 0, ' ')
//                 // console.log(final_text)
//             }
//         }
//     }
//
//
//     final_text=final_text.join('')
//     console.log(final_text)
//     return final_text
// }