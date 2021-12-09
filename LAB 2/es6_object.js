let person = {
    name:"nueng",
    age: 25,
    eyeColor: "black",
    profile: function(){
        return `${this.name}:${this.age} years`;
    },
};

person.age = 20;
const x = person;
x.age = 25;

console.log(person);
console.log(x.profile());

const numbers = [10, 20, 30, 40];
const comNumA = [numbers,numbers];
const comNumS = [...numbers, ...numbers];
console.log(comNumS);

const sum = (...NumS) => {
    total = 0;
    for (let num of nums) total += num;
    return total;
};
console.log(sum(...comNumS));

//destructuring
const [a,b] = [10, 20, 30];
console.log(a);

const { name: Rname, age } = person;
console.log(Rname);
