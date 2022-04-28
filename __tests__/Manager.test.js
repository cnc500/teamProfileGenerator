const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with an Office Number if provided valid arguments", () => {
      const manager = new Manager("Cathy", 432, "cathy@fooemail.com", 2345678);   

      expect(manager.officeNumber).toEqual(2345678);
    });
  });
});