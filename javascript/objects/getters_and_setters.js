let user = {}

Object.defineProperty(user, 'fullName', {
    get(){
        return `${this.name} ${this.surname}`
    },

    set(value){
        [this.name, this.surname] = value.split(" ")
    }
});

user.fullName = "Bob Khan"
console.log(user.name)
console.log(user.surname)