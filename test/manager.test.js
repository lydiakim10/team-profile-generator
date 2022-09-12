const Manager = require("../lib/manager");

// creates manager profile
describe("creating manager profile", () => {
    test("creating a new intern", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.office).toEqual(expect.any(Number));
    })
});

// gets manager name
describe ("manager name", () => {
    test("get manager name", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.getName()).toEqual(expect.any(String));
    });
});

// gets manager id
describe ("manager id", () => {
    test("get manager id", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.getId()).toEqual(expect.any(Number));
    });
});

// gets manager email
describe ("manager email", () => {
    test("get manager email", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.getEmail()).toEqual(expect.any(String));
    });
});

// gets manager office number
describe ("manager office number", () => {
    test("get manager office number", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.getOffice()).toEqual(expect.any(Number));
    });
});

// gets manager role
describe ("manager role", () => {
    test("get manager role", () => {
        const manager = new Manager("Lydia Kim", 13, "lydiakim10@yahoo.com", 1027);
        expect(manager.getRole()).toEqual("Manager");
    });
});