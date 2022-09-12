const Employee = require("../lib/employee");

// creates an employee profile
describe("creating employee profile", () => {
    test("creating a new employee", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })
});

// gets the employee name
describe ("employee name", () => {
    test("get employee name", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });
});

// gets the employee id
describe ("employee id", () => {
    test("get employee id", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });
});

// gets the employee email
describe ("employee email", () => {
    test("get employee email", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getEmail()).toEqual(expect.any(String));
    });
});

// gets the employee role
describe ("employee role", () => {
    test("get employee role", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});