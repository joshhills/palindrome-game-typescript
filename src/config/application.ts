/**
 * Generic application configuration.
 * Could use .dotenv to externalise aspects of it.
 */
export class ApplicationConfig {
    // The port to run the web-server on.
    public static readonly PORT = 3000 || process.env.PORT;
    
    // The maximum number of hiscores to track at a given time.
    public static readonly MAX_NUM_HISCORES = 5;
    // The minimum name length to accept.
    public static readonly MIN_NAME_LENGTH = 3;
    // The maximum name length to accept.
    public static readonly MAX_NAME_LENGTH = 32;
    // The minimum word length to accept.
    public static readonly MIN_WORD_LENGTH = 3;
    // The minimum word length to accept.
    public static readonly MAX_WORD_LENGTH = 64;
}
