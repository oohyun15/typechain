class Human {
  nickname: string
  age: number
  gender: string
  constructor(nickname: string, age: number, gender: string) {
    this.nickname = nickname
    this.age = age
    this.gender = gender
  }
}

const potter = new Human("Potter", 26, "Male")

const sayHi = (person: Human) => {
  console.log(`Hi ${person.nickname}, You are ${person.age} and ${person.gender}.`)
}

sayHi(potter)