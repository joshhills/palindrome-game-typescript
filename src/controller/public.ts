import { Request, Response } from 'express';
import { InMemoryHiscoresService, HiscoresService, PalindromeCheckerService, SimplePalindromeCheckerService } from '../services';
import { HiscoreEntry } from '../model';
import { validationResult } from 'express-validator';

// Module pattern ensures these are singletons as long as service is running
// This is *without* a dependency-injection pattern from a framework.
const hiscores: HiscoresService = new InMemoryHiscoresService();
const palindrome: PalindromeCheckerService = new SimplePalindromeCheckerService();

export const submitEntry = async (req: Request, res: Response) => {

    // Read and sanitise input
    const errors = validationResult(req);
    
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
    }
    
    const name: string = req.body.name.toLowerCase();
    const word: string = req.body.word;

    if (palindrome.isPalindrome(word)) {
        
        // Format a hiscores entry.
        const hiscoreEntry = new HiscoreEntry(name, word.length);

        await hiscores.submit(hiscoreEntry);
        return res.json(hiscoreEntry.points);
    } else {

        // Return zero points
        return res.json(0);
    }
}

export const getScores = async (req: Request, res: Response) => {
    
    const current = await hiscores.get();
    return res.json(current);
}