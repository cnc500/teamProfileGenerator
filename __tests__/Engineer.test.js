const Engineer = require("../engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a GitHub username if provided valid arguments", () => {
      const engineer = new Engineer("Rachel", 211, "rachel@fooemail.com","projectRachel");   //??? all four parameters

      expect(engineer.gitHub).toEqual("projectRachel");
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Engineer();

    //   expect(cb).toThrow();
    // });

    // it("should throw an error if not provided a GitHub username", () => {
    //     const cb = () => new Engineer("Rachel", 211, "rachel@fooemail.com");
    //     const err = new Error("Expected parameter 'GitHub Username' to be a non-empty string");
  
    //     expect(cb).toThrowError(err);
    // });
  });
});