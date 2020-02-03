/**
 * An entry to the game as logged in a hiscores system.
 */
export class HiscoreEntry {

    public readonly name: string;
    public readonly points: number;

    /**
     * @param name The name of the user who submitted the entry
     * @param points The number of points the entry received
     */
    constructor(name: string, points: number) {
        this.name = name;
        this.points = points;
    }
}