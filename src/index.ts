import express from "express";
import { ApplicationConfig } from './config';
import route from './route';
import path from "path";

/**
 * Hello! I've create a more sophisticated framework for development
 * around this idea of a palindrome game that demonstrates some
 * domain-driven design.
 * 
 * @author Josh Hills
 */

const app = express();

// Bootstrap app with middleware
app.use(express.static(path.join(__dirname, 'static')), express.json(), route);

// Begin server
app.listen(ApplicationConfig.PORT);

// Expose to tests
export default app;