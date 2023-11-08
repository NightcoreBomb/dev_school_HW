class VigenèreCipher{
    abc
    key
    constructor(key, abc) {
        this.abc=abc
        this.key=key
    }
    encode (plainText){
        let  leters = this.abc.split('')
        let key_let = this.key.split('')
        let text_let = plainText.split('')
        let code_key = []
        let code_text = []
        let code_res =[]
        let final_text = []
        let space_index = []
        let text_out_space =plainText.replace(/\s/g, '')
        let key_for_text = this.key.repeat(text_out_space.length)
        if (key_for_text.length > plainText.length) {
            key_for_text = key_for_text.substr(0, text_out_space.length);
        }
        // console.log(key_for_text.length, 'bim')
        for (let i = 0; i<key_for_text.length;i++){
            if (this.abc.indexOf(key_for_text[i]) !== -1) {
                code_key.push(this.abc.indexOf(key_for_text[i])+1)
            }
        }
        // console.log(code_key.length, key_let.length)

        for (let i = 0; i < text_let.length; i++) {
            const char = text_let[i];
            const indx = leters.indexOf(char);
            if (indx !== -1) {
                code_text.push(indx);
            } else {
                code_text.push(char);
            }
        }
        console.log(code_text)


        for (let i = 0; i < code_text.length; i++) {

            code_res.push(code_text[i] + code_key[i])
            if (code_res[i] > this.abc.length) {
                code_res[i] = code_res[i] - this.abc.length
            }
        }

        for (let i = 0; i < plainText.length; i++){
            if (plainText[i] === ' '){
                space_index.push(i)
            }
        }
        for (let i = 0; i<code_res.length;i++){
            final_text.push(leters[code_res[i]-1])
            // console.log(final_text)
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
        return final_text
    }
    decode (plainText){
        let leters = this.abc.split('')
        let key_let = this.key.split('')
        let text_let = plainText.split('')
        let code_key = []
        let code_text = []
        let code_res =[]
        let final_text = []
        let space_index = []
        let text_out_space =plainText.replace(/\s/g, '')
        let key_for_text = this.key.repeat(text_out_space.length)
        if (key_for_text.length > plainText.length) {
            key_for_text = key_for_text.substr(0, text_out_space.length);
        }
        // console.log(key_for_text.length, 'bim')
        for (let i = 0; i<key_for_text.length;i++){
            if (this.abc.indexOf(key_for_text[i]) !== -1) {
                code_key.push(this.abc.indexOf(key_for_text[i]))
            }
        }
        // console.log(code_key.length, key_let.length)

        for (let i = 0; i < text_let.length; i++) {
            const char = text_let[i];
            const indx = leters.indexOf(char);
            if (indx !== -1) {
                code_text.push(indx);
            } else {
                code_text.push(char);
            }
        }
        console.log(code_text)

        for (let i = 0; i<text_out_space.length;i++){
            if (this.abc.indexOf(text_let[i]) !== -1) {
                code_text.push(this.abc.indexOf(text_let[i])+1)
            }
        }


        for (let i = 0; i < code_text.length; i++) {
            code_res.push(code_text[i] - code_key[i])
            if (code_res[i] < 1) {
                code_res[i] = code_res[i] + this.abc.length
            }
        }

        if (text_out_space.length !== code_res.length){
            return plainText
        }


        for (let i = 0; i < plainText.length; i++){
            if (plainText[i] === ' '){
                space_index.push(i)
            }
        }
        for (let i = 0; i<code_res.length;i++){
            final_text.push(leters[code_res[i]-1])
            // console.log(final_text)
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
        // console.log(final_text)
        return final_text
    }
}



    
// VigenèreCipher('helloworld', 'fuc ki yo uz rkdsfhsdjfsdjfasjd ')
let a = new VigenèreCipher('hello',   'abcdefghijklmnopqrstuvwxyz')
// console.log(a.encode('codewars'))
console.log(a.encode('it\'s a shift cipher!'))
console.log(a.decode('it\'s a shift cipher!'))

