function square(num: number) {
  return num * num
}

function greet(person: string) {
  return `Hello, ${person}!`
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `${person} is ${age} and is ${isFunny ? 'funny' : 'not funny'}.`
}

square(3)
greet('Max')
doSomething('Max', 30, true)
