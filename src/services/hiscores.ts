import { HiscoreEntry } from '../model';
import { ApplicationConfig } from '../config';

/**
 * Maintain a list of score submissions to the game.
 */
export interface HiscoresService {

    /**
     * Add a hiscore to the list - may not necessarily be kept.
     * 
     * @param entry The entry to submit to the hiscores list.
     * @returns An array representing the new state of the hiscores.
     */
    submit(entry: HiscoreEntry): Promise<HiscoreEntry[]>;

    /**
     * Retrieve hiscores
     * 
     * @returns An array representing the current state of the hiscores.
     */
    get(): Promise<HiscoreEntry[]>;
}

/**
 * Maintain hiscores in-memory - does not strictly need to be asynchronous but
 * more sophisticated implementations would.
 */
export class InMemoryHiscoresService implements HiscoresService {

    // The current state of hiscores.
    private hiscores: HiscoreEntry[] = [];

    public async submit(entry: HiscoreEntry): Promise<HiscoreEntry[]> {
        this.hiscores.push(entry);
        this.hiscores.sort((a, b) => b.points - a.points);
        this.hiscores = this.hiscores.slice(0, ApplicationConfig.MAX_NUM_HISCORES);

        return this.get();
    }
    
    public async get(): Promise<HiscoreEntry[]> {
        return Promise.resolve(this.hiscores);
    }
}