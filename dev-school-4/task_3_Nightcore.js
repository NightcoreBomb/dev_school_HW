
class Warrior{
    rank_ = "Pushover"
    experience_ = 100
    achievements_ = []
    level_ = 1

    constructor() {
    }
    level (){
        this.level_ = Math.floor(this.experience_ / 100)
        if (this.level_ > 100){
            this.level_ = 100
        }
        return this.level_
    }
    rank (){
        if (this.level_ > 100){
            this.level_ = "Greatest"
        }
        if (this.level_ == 100){
            this.rank_ = "Greatest"
        }
         if (this.level_ < 100 && this.level_ >= 90){
            this.rank_ = "Master"
        }
         if (this.level_ < 90 && this.level_ >= 80){
            this.rank_ = "Champion"
        }
         if (this.level_ < 80 && this.level_ >= 70){
            this.rank_ = "Conqueror"
        }
         if (this.level_ < 70 && this.level_ >= 60){
            this.rank_ = "Elite"
        }
         if (this.level_ < 60 && this.level_ >= 50){
            this.rank_ = "Sage"
        }
         if (this.level_ < 50 && this.level_ >= 40){
            this.rank_ = "Veteran"
        }
         if (this.level_ < 40 && this.level_ >= 30){
            this.rank_ = "Warrior"
        }
         if (this.level_ < 30 && this.level_ >= 20){
            this.rank_ = "Fighter"
        }
         if (this.level_ < 20 && this.level_ >= 10){
            this.rank_ = "Novice"
        }
         if (this.level_ < 10 && this.level_ >= 0){
            this.rank_ = "Pushover"
        }


        return this.rank_
    }
    experience(){
        if (this.experience_ > 10000){
            this.experience_ = 10000
        }
        return this.experience_
    }
    achievements(){
        return this.achievements_
    }

    battle(lvl){
        if (lvl<1 || lvl>100){
            return "Invalid level"
        }
        this.rank()
        let a = new Warrior()
        a.training(['', (lvl-1)*100, 1])
        console.log(a.level())
        console.log(a.rank())
        if (lvl - 5 >= this.level_ && this.rank_ != a.rank_ ){
            return "You've been defeated"
        }
        if (lvl > this.level_){
            this.experience_ += 20 * ((lvl - this.level_) * (lvl - this.level_) )
            this.level()
            return  "An intense fight"
        }
        if (lvl == this.level_){
            this.experience_ += 10
            this.level()
            return "A good fight"
        }
        if (lvl + 1 == this.level_){
            this.experience_ += 5
            this.level()
            return "A good fight"
        }

         {
            return "Easy fight"
        }

    }
    training(data){
        if (this.level_ >= data[2]){
            this.experience_ += data[1]
            this.achievements_.push(data[0])
            this.level()
            return data[0]
        }
         {
            return "Not strong enough"
        }
    }
}


// let a = new Warrior()
// let Goku = new Warrior()
// console.log(a.rank())
// console.log(a.level())
// console.log (Goku.level())
// console.log (Goku.rank())
// console.log (Goku.achievements())
// console.log (Goku.training(["Do ten push-ups", 95, 1]))
// console.log (Goku.experience())
// console.log (Goku.level())
// console.log (Goku.battle(0))
// console.log (Goku.experience())
// console.log (Goku.battle(1))
// console.log (Goku.experience())
// console.log (Goku.level())
// console.log (Goku.achievements())
// console.log (Goku.rank())
// console.log( Goku.battle(3))
// console.log (Goku.experience())
// console.log (Goku.level())
// console.log (Goku.training(["Survive one night at the Forest of Death", 170, 2]))
// console.log (Goku.experience())
// console.log (Goku.training(["Mastered the Spirit Bomb", 1580, 10]))
// console.log (Goku.experience())
// console.log (Goku.level())
// console.log (Goku.achievements())
// console.log (Goku.battle(2))
// console.log (Goku.experience())
// console.log (Goku.level())
// console.log (Goku.experience())
// console.log(a.experience())
// console.log(a.achievements())
// console.log(a.battle())
// console.log(a.training("Defeated Chuck Norris", 9000, 1))
// console.log(a.achievements())
// console.log(a.experience())
// console.log(a.rank())
