let myFunc = (username: string, age: number): void => {
    console.log(`username: ${username}, age: ${age}`)
}

// let arr: (string|number)[] = ['kangchinshen', 22] > Invalid
let tup: [string, number] = ['kangchinshen', 22]

myFunc(...tup)