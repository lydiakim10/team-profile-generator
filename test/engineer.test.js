const Engineer = require("../lib/engineer");

describe("creating engineer profile", () => {
    test("creating a new engineer", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
    })
});

describe ("engineer name", () => {
    test("get engineer name", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.getName()).toEqual(expect.any(String));
    });
});

describe ("engineer id", () => {
    test("get engineer id", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.getId()).toEqual(expect.any(Number));
    });
});

describe ("engineer email", () => {
    test("get engineer email", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.getEmail()).toEqual(expect.any(String));
    });
});

describe ("engineer github", () => {
    test("get engineer github", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.getGithub()).toEqual(expect.any(String));
    });
});

describe ("engineer role", () => {
    test("get engineer role", () => {
        const engineer = new Engineer("Lydia Kim", 13, "lydiakim10@yahoo.com", "lydiakim10");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});