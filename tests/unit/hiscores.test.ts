import { expect } from 'chai';
import { HiscoresService, InMemoryHiscoresService } from '../../src/services';
import { HiscoreEntry } from '../../src/model';

const hiscores: HiscoresService = new InMemoryHiscoresService();

describe('Hiscores service', () => {

    it('should be able to be added to and retrieved from', async () => {
        const entry = new HiscoreEntry("Josh", 10);
        await hiscores.submit(entry);
        const current = await hiscores.get();
        expect(current).to.be.of.length(1).and.deep.include(entry);
    });
});