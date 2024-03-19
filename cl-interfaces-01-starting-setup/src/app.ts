// Code goes here!
class Department {
    // private name: string;
    //* The adding of the 'private' access modifier is to make sure that no one is able to execute the code -> accounting.employees[2] = 'anna';
    private employees: string[] = [];
    //* Readonly makes sure that a certain property should only be initialized once and shouldn't change thereafter.
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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT'); //* Super always needs to be called first, and everything that needs to be done in this class should be after it.
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'accounting');
    }

    addReports(text: string){
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}


// const accounting = new Department('D1', 'Accounting');
// accounting.describe();
// accounting.addEmployee('emp1');
// accounting.printEmployeeInformation();


const it = new ITDepartment('IT1', ['max']);
it.describe();
it.addEmployee('Max');
it.addEmployee('Ann');
it.printEmployeeInformation();


const account = new AccountingDepartment('ACC1', []);

account.addReports('something went wrong...');
account.getReports();

