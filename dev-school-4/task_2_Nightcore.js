
class Vector{
    coordinats
    constructor(coordinats) {
        this.coordinats=coordinats
    }

    add(vector){
        if (this.coordinats.length !== vector.coordinats.length){
            throw new Error("Vectors must have the same length");
        }
        let newVector = []

        for (let i = 0; i < this.coordinats.length;i++){
            newVector.push(this.coordinats[i]+vector.coordinats[i])

        }
        console.log(newVector)
        return new Vector(newVector)
    }
    subtract(vector){
        if (this.coordinats.length !== vector.coordinats.length){
            throw new Error("Vectors must have the same length for addition.");
        }
        let newVector = []

        for (let i = 0; i < this.coordinats.length;i++){
            newVector.push(this.coordinats[i]-vector.coordinats[i])
        }
        console.log(newVector)
        return new Vector(newVector)
    }
    dot(vector){
        if (this.coordinats.length !== vector.coordinats.length) {
            throw new Error("Vectors must have the same length");
        }

        return this.coordinats.reduce((sum, val, index) => sum + val * vector.coordinats[index], 0);

    }
    norm(){
        let norm = []
        for (let i = 0; i < this.coordinats.length;i++){
            norm.push(this.coordinats[i] * this.coordinats[i] )

        }
        const newVector = Math.sqrt(norm.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        console.log(newVector)
        return newVector
    }
    equals(vector){
        if (this.coordinats.length !== vector.coordinats.length){
            return false
        }

        for (let i = 0; i < this.coordinats.length; i++) {
            if (this.coordinats[i] !== vector.coordinats[i]) {
                console.log('false')
                return false;

            }
        }
        console.log('true')
        return true;
    }
    toString() {
        return `(${this.coordinats.join(',')})`;
    }
}

let a = new Vector([2,3])
let b = new Vector([2,3])

a.add(b)
a.subtract(b)
a.dot(b)
a.norm(b)
a.equals(b)
a.toString()