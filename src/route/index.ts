import * as express from 'express';
import { check } from 'express-validator';
import { getScores, submitEntry } from '../controller';
import { ApplicationConfig } from '../config';

export default express.Router()
    .get('/api/getScores', getScores)
    .post('/api/submitEntry', [
        check('name')
            .trim()
            .isAlpha()
            .isLength(
                {
                    min: ApplicationConfig.MIN_NAME_LENGTH,
                    max: ApplicationConfig.MAX_NAME_LENGTH
                }),
        check('word')
            .trim()
            .isLength(
                {
                    min: ApplicationConfig.MIN_WORD_LENGTH,
                    max: ApplicationConfig.MAX_WORD_LENGTH
                })
            .matches(/^\S+$/) // Disallow spaces
    ], submitEntry);