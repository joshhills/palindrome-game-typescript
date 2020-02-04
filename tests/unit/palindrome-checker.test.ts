import { expect } from 'chai';
import { PalindromeCheckerService, SimplePalindromeCheckerService } from '../../src/services';

const palindrome: PalindromeCheckerService = new SimplePalindromeCheckerService();

describe('Palindrome service', () => {
    
    it('should perform check operation properly', async () => {
        expect(palindrome.isPalindrome("racecar")).to.be.true;
        expect(palindrome.isPalindrome("fail")).to.be.false;
    });

    it('should support non-English characters', async () => {
        expect(palindrome.isPalindrome("bób")).to.be.true;
    });
});