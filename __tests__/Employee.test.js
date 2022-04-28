const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, ID and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 239, "sarah@fooemail.com");

      expect(employee.employeeName).toEqual("Sarah");
      expect(employee.iD).toEqual(239);
      expect(employee.email).toEqual("sarah@fooemail.com");
    });
  });
});
