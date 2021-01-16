interface Human {
  nickname: string
  age: number
  gender: string
}

const person = {
  nickname: "Potter",
  age: 26,
  gender: "Male"
}

const sayHi = (person: Human) => {
  console.log(`Hi ${person.nickname}, You are ${person.age} and ${person.gender}.`)
}

sayHi(person)