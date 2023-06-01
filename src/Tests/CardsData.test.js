import Cardsdata from "./Cardsdata";

describe("Cardsdata", () => {
  it("should have correct data for each card", () => {
    // Test the data for each card in Cardsdata array
    Cardsdata.forEach((card) => {
      expect(card.id).toBeDefined();
      expect(card.rname).toBeDefined();
      expect(card.imgdata).toBeDefined();
      expect(card.price).toBeDefined();
      expect(card.qnty).toBeDefined();
    });
  });

  it("should have a non-zero price for each card", () => {
    Cardsdata.forEach((card) => {
      expect(card.price).toBeGreaterThan(0);
    });
  });

  it("should have a non-negative quantity for each card", () => {
    Cardsdata.forEach((card) => {
      expect(card.qnty).toBeGreaterThanOrEqual(0);
    });
  });
});
