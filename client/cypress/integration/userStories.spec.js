context("userStories", () => {
  it("containts the 9 goal categories", () => {
    cy.visit("http://localhost:8080");
    cy.contains("Spiritual");
    cy.contains("Adventure");
    cy.contains("Contribution");
    cy.contains("Personal development");
    cy.contains("Career / Business");
    cy.contains("Leisure");
    cy.contains("Family / Friends / Partner");
    cy.contains("Environment");
    cy.contains("Health / Fitness");
  });

  it("can create a new goal with a submit click and delete it", () => {
    cy.visit("http://localhost:8080");
    cy.get("#Spiritual")
      .find("input[type=text]")
      .type("Test goal")
      .wait(200);
    cy.get("#Spiritual")
      .find("input[type='submit']")
      .click();
    cy.get("#Spiritual").contains("Test goal");
    cy.get("#Spiritual")
      .contains("Test goal")
      .parent()
      .find(".button")
      .click();
  });
  it("can create a new goal with a press enter and delete it", () => {
    cy.visit("http://localhost:8080");
    cy.get("#Spiritual")
      .find("input[type=text]")
      .type("Test goal")
      .wait(200)
      .type("{enter}");
    cy.get("#Spiritual").contains("Test goal");
    cy.get("#Spiritual")
      .contains("Test goal")
      .parent()
      .find(".button")
      .click();
  });
  it("can not create a new goal with less than 3 characters", () => {
    cy.visit("http://localhost:8080");
    cy.get("#Spiritual")
      .find("input[type=text]")
      .type("Te");
    cy.get("#Spiritual")
      .find("input[type='submit']")
      .should("be.disabled");
  });
  it("can not create more than 3 goals per category", () => {
    cy.visit("http://localhost:8080");
    cy.get("#Spiritual")
      .find("input[type=text]")
      .type("Test1")
      .type("{enter}")
      .wait(200)
      .type("Test2")
      .type("{enter}")
      .wait(200)
      .type("Test3")
      .type("{enter}")
      .wait(200);
    cy.get("#Spiritual")
      .find("input[type='submit']")
      .should("be.disabled");
    cy.get("#Spiritual")
      .contains("Test1")
      .parent()
      .find(".button")
      .click();
    cy.get("#Spiritual")
      .contains("Test2")
      .parent()
      .find(".button")
      .click();
    cy.get("#Spiritual")
      .contains("Test3")
      .parent()
      .find(".button")
      .click();
  });
});
