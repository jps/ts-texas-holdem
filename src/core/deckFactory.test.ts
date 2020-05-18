import { newDeck } from "./deckFactory";
import { Rank, Suite } from "./types";

describe('deckFactory should', () => { 
  test('have 52 cards', () => {
      expect(newDeck().length).toBe(52);
  }),

  test('be in new deck order', () => {
    const expectedSuiteOrder = [Suite.Spades, Suite.Diamonds, Suite.Clubs, Suite.Hearts];
    const expectedRankOrder = [Rank.Ace, Rank.King, Rank.Queen, Rank.Jack, Rank.Ten, Rank.Nine, 
      Rank.Eight, Rank.Seven, Rank.Six, Rank.Five, Rank.Four, Rank.Three, Rank.Two];
    
    let deck = newDeck();

    expectedSuiteOrder.forEach((suite) => {
      expectedRankOrder.forEach((rank) => {
        const card = deck.shift();
        if(!card) throw "missing card";
        expect(card.rank).toEqual(rank);
        expect(card.suite).toEqual(suite);    
      })
    });
  })
});
  
