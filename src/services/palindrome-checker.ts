/**
 * A utility service to perform game-logic checks.
 */
export interface PalindromeCheckerService {
    
    /**
     * Check whether an arbitrary string is the same
     * when reversed.
     * 
     * @param word The word to check.
     * @returns True if the word is a palindrome.
     */
    isPalindrome(word: string): boolean;
}

/**
 * Use built-in string functions to check for palindromes - 
 * do not check semantics such as correctness in a dictionary.
 */
export class SimplePalindromeCheckerService implements PalindromeCheckerService {
    
    isPalindrome(word: string): boolean {
        
        // Simply reversing the string and performing an equality check will suffice.
        return word === word.split('').reverse().join('');
    }
}