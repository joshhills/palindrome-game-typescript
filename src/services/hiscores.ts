export interface HiscoresService {
    submit(entry: HiscoreEntry);
    get(): HiscoreEntry[];
}

export class InMemoryHiscoresService {
    
}