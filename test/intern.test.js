const Intern = require("../lib/intern");

// creates intern profile
describe("creating intern profile", () => {
    test("creating a new intern", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "Syracuse University");
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    })
});

// gets intern name
describe ("intern name", () => {
    test("get intern name", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(intern.getName()).toEqual(expect.any(String));
    });
});

// gets intern id
describe ("intern id", () => {
    test("get intern id", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(intern.getId()).toEqual(expect.any(Number));
    });
});

// gets intern email
describe ("intern email", () => {
    test("get intern email", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(intern.getEmail()).toEqual(expect.any(String));
    });
});

// gets intern school
describe ("intern school", () => {
    test("get intern school", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(intern.getSchool()).toEqual(expect.any(String));
    });
});

// gets intern role
describe ("intern role", () => {
    test("get intern role", () => {
        const intern = new Intern("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(intern.getRole()).toEqual("Intern");
    });
});