const Manager = require("../manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with an Office Number if provided valid arguments", () => {
      const manager = new Manager("Cathy", 432, "cathy@fooemail.com", 2345678);   //??? all four parameters

      expect(manager.officeNumber).toEqual(23455678);
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Manager();

    //   expect(cb).toThrow();
    // });

    // it("should throw an error if not provided a GitHub username", () => {
    //     const cb = () => new Manager("Cathy", 432, "cathy@fooemail.com");
    //     const err = new Error("Expected parameter 'Office Number' to be a non-negative number");
  
    //     expect(cb).toThrowError(err);
    // });
  });
});