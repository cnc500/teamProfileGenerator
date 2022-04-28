const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a school if provided valid arguments", () => {
      const intern = new Intern("Jill", 215, "jill@fooemail.com","universityA");   
      // const obj = new Intern(text);

      expect(intern.school).toEqual("universityA");

    });
  });
});
