describe("test the kanba board", () => {
  it("run the program and check for correctly load", () => {
    cy.exec("npm run start").then(() => {
      cy.visit("http://localhost:3000");
    });
  });

  it("select one card and drag and drop it", () => {
    cy.get('div ~ div[draggable="true"]')
      .first()
      .trigger("dragstart")
      .parentsUntil()
      .first()
      .siblings()
      .first()
      .trigger("drop", { force: true });
  });

  it("select multiple card and drag and drop it", () => {
    cy.get('div ~ div[draggable="true"]').as("cards");

    cy.get("@cards").eq(0).click();

    cy.get("@cards").eq(1).click();

    cy.get("@cards")
      .eq(2)
      .click()
      .trigger("dragstart")
      .parentsUntil()
      .first()
      .siblings()
      .eq(1)
      .trigger("drop", { force: true });
  });

  it("filter cards by title", () => {
    cy.get("ul > li").last().as("searchIcon");

    //open search input and search for a card
    cy.get("@searchIcon").click();
    cy.get("@searchIcon").within(() => {
      //search for the card who contain the title 'card 2'
      cy.get("input").type("card 2");
      cy.wait(3000);

      //close the search filter
      cy.get("span").click();
    });
  });

  it("filter cards by tags", () => {
    cy.get("ul > li").first().as("tagFilter");

    //open search input and search for a card
    cy.get("@tagFilter").click();
    cy.get("@tagFilter").within(() => {
      //search for the card who contain the title 'card 2'
      cy.get("li").eq(0).click();
      cy.get("li").eq(2).click();
      cy.wait(3000);

      //close the tags filter
      cy.get("@tagFilter").click();
    });
  });
});
