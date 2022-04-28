const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a GitHub username if provided valid arguments", () => {
      const engineer = new Engineer("Rachel", 211, "rachel@fooemail.com","projectRachel"); 

      expect(engineer.gitHub).toEqual("projectRachel");
    });
  });
});