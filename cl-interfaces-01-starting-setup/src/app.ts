// Code goes here!
class Department {
    // private name: string;
    //* The adding of the 'private' access modifier is to make sure that no one is able to execute the code -> accounting.employees[2] = 'anna';
    private employees: string[] = [];

    constructor(private readonly id: string, private name: string) {
    }

    //* The this inside the describe method should always refer to an instance of the Department class.
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('D1', 'Accounting');

accounting.describe();

accounting.addEmployee('emp1');
accounting.printEmployeeInformation();

