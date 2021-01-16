const nickname = "Potter",
  age = "26",
  gender = "Male"

const sayHi = (nickname, age, gender?) => {
  console.log(`Hi ${nickname}, You are ${age} and ${gender}.`)
}

sayHi(nickname, age)