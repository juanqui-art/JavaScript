const person = {
    name: "Jhon",
    walk(){},
    talk(){}
}

person.talk();
person.name = "";
const targetMember = "name";

person[targetMember] = "Juan";
console.log(person)