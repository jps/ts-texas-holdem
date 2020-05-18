// import { deckFactory } from "./deck";
// import { Card, Rank, Suite } from "./types";

// describe('deck', () => { 
//   test('should have 52 cards', () => {
//     const deckFactory : deckFactory = deckFactory();
//       expect(deckFactory.remainingCards).toBe(52);
//   }),

//   test('should be in new deck order', () => {
//     const deck = deckFactory()
//     const expectedSuiteOrder = [Suite.Spades, Suite.Diamonds, Suite.Clubs, Suite.Hearts];
//     const expectedRankOrder = [Rank.Ace, Rank.King, Rank.Queen, Rank.Jack, Rank.Ten, Rank.Nine, 
//       Rank.Eight, Rank.Seven, Rank.Six, Rank.Five, Rank.Four, Rank.Three, Rank.Two];
    
//     let deck2 = deck.drawCard();

//     expectedSuiteOrder.forEach((suite) => {
//       expectedRankOrder.forEach((rank) => {
//         var card = deck2.next();
//         if(!card.done)
//         {
//           expect(card.value.rank).toEqual(rank);
//           expect(card.value.suite).toEqual(suite);
//         }    
//       })
//     });
//   })
// });
  
