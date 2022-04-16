const Intern = require("../intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a school if provided valid arguments", () => {
      const intern = new Intern("Jill", 215, "jill@fooemail.com","universityA");   //??? all four parameters

      expect(intern.school).toEqual("universityA");
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Intern();

    //   expect(cb).toThrow();
    // });

    it("should throw an error if not provided a school", () => {
        const cb = () => new Intern("Jill", 215, "jill@fooemail.com");
        const err = new Error("Expected parameter 'school' to be a non-empty string");
  
        expect(cb).toThrowError(err);
    });
  });
});