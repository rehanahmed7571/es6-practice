class Parent{
    constructor(){
        this.father = 'Arnold';
    }
}

class Child extends Parent {
    constructor(Name){
        super();
        this.name = Name;
    }

    fullName(){
        return this.father + " "+ this.name;
    }
}

const baby = new Child('tom')
const baby2 = new Child('jerry')

console.log(baby,baby2);
console.log(baby2.fullName());