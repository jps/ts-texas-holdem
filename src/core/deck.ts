import { Card, Rank, Suite } from "./types";

export interface Deck{
    drawCard : Card | void //Generator<any, void, false>;
    remainingCards : number;
};

export const deck = () => {

    function* generateDeck() : Generator<Card, void, unknown>  
    {
        for (const suite in Suite) {
            if (isNaN(Number(suite))) {
                for(const rank in Rank){
                    if (isNaN(Number(rank))) {
                        yield  ({
                            rank : (Rank[rank as keyof typeof Rank]),
                            suite : Suite[suite as keyof typeof Suite]
                        });
                    }
                }
            }
        }
    };

    function newDeck() : Array<Card>
    {
        const deckGenerator = generateDeck()
        const deck : Array<Card> = [];

        while(true)
        {
            const nextCard = deckGenerator.next()
            if(!nextCard.done)
            {
                deck.push(nextCard.value);
            }
            return deck;
        }
    }
};

export const deckUtilities = () => {

    function newDeck() : Array<Card>
    {
        const deckGenerator = generateDeck()
        const deck : Array<Card> = [];

        while(true)
        {
            const nextCard = deckGenerator.next()
            if(!nextCard.done)
            {
                deck.push(nextCard.value);
            }
            return deck;
        }
    }

    //Fisher Yates Shuffle
    function shuffle(array : Array<Card>): Array<Card>
    {
        let m = array.length, t, i;
        
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
        
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        
        return array;
    }

    return {
        drawCard : generateDeck,
        remainingCards : 52 
    };
};