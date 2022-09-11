const Employee = require("../lib/employee");

describe("creating employee profile", () => {
    test("creating a new employee", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })
});

describe ("employee name", () => {
    test("get employee name", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });
});

describe ("employee id", () => {
    test("get employee id", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });
});

describe ("employee email", () => {
    test("get employee email", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getEmail()).toEqual(expect.any(String));
    });
});

describe ("employee role", () => {
    test("get employee role", () => {
        const employee = new Employee("Lydia Kim", 13, "lydiakim10@yahoo.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});