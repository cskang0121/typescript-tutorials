class Person {

    constructor(
        readonly firstName: string,
        public lastName: string, 
        private age: number) {}

    output() {
        console.log(`${this.firstName} ${this.lastName} ${this.age}`)
    }
}

export default Person