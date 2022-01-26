const person ={Name: 'Justin', gfName: 'SalinaGomez', phone: '0171777777', address: 'California', salary: '4000'};

const {Name} = person;

console.log(Name);


const moreComplex = {
    car: 'Marcediz Benz',

    info:{
        auto : 'yes',
        fuel : 'petrol'
    }
}

const {fuel} = moreComplex.info;

console.log(fuel);



const friends = ['Amir Khan', 'Salman Khan', 'Sharukh Khan'];

const[something,...rest] = friends;


console.log(rest);