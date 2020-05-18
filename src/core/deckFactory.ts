import { Card, Rank, Suite } from "./types";

function* generateDeck(): Generator<Card, void, unknown> {
    for (const suite in Suite) {
        if (isNaN(Number(suite))) {
            for (const rank in Rank) {
                if (isNaN(Number(rank))) {
                    yield ({
                        rank: (Rank[rank as keyof typeof Rank]),
                        suite: Suite[suite as keyof typeof Suite]
                    });
                }
            }
        }
    }
};

export function newDeck(): Array<Card> {
    return Array.from(generateDeck());
}