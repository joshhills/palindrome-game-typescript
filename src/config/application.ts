/**
 * Generic application configuration.
 */
export class ApplicationConfig {
    // The port to run the web-server on.
    public static readonly PORT = 3000 || process.env.PORT;
    // The maximum number of hiscores to track at a given time.
    public static readonly MAX_NUM_HISCORES = 5;
}
