const Employee = require("../employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, ID and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 239, "sarah@fooemail.com");

      expect(employee.name).toEqual("Sarah");
      expect(employee.iD).toEqual(239);
      expect(employee.email).toEqual("sarah@fooemail.com");
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Employee();

    //   expect(cb).toThrow();
    // });

    // it("should throw an error if not provided an ID or email", () => {
    //   const cb = () => new Employee("Sarah");
    //   const err = new Error("Expected parameter 'ID' to be a non-negative number");

    //   expect(cb).toThrowError(err);
    // });

    // it("should throw an error if 'name' is not a string", () => {
    //   const cb = () => new Employee(3, 2, "sarah@fooemail.com");
    //   const err = new Error("Expected parameter 'name' to be a non-empty string");

    //   expect(cb).toThrowError(err);
    // });

    // it("should throw an error if 'id' is not a number", () => {
    //   const cb = () => new Employee("Sarah", "2","sarah@fooemail.com");
    //   const err = new Error("Expected parameter 'ID' to be ");

    //   expect(cb).toThrowError(err);
    // });

    // it("should throw an error if 'age' is less than 0", () => {
    //   const cb = () => new Employee("Sarah", -1, "sarah@fooemail.com");
    //   const err = new Error("Expected parameter 'ID' to be a non-negative number");

    //   expect(cb).toThrowError(err);
    // });
  });
});
