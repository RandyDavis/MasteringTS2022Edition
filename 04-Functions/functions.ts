function square(num: number): number {
  return num * num
}

// function greet(person: string) {
//   return `Hello, ${person}!`
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `${person} is ${age} and is ${isFunny ? 'funny' : 'not funny'}.`
}

function greet(person: string = 'Randy') {
  return `Hello, ${person}!`
}

const add = (x: number, y: number): number => {
  return x + y
}

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString()
  }
  return num
}

square(3)
greet('Max')
doSomething('Max', 30, true)
