// Code goes here!
class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //* The this inside the describe method should always refer to an instance of the Department class.
    describe(this: Department) {
        console.log('Department ' + this.name);
    }
}

const accounting = new Department('Accounting');

accounting.describe();

