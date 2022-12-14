import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { Password } from '../services/password';

import { validateRequest, BadRequestError } from '@mgbg_tickets/common';


const router = express.Router();

router.post('/api/users/signin', 
    [
        body('email')
            .isEmail()
            .withMessage('Email in not valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('password is not valid')
    ],
    validateRequest,
    async (req: Request, res: Response) => {

        const { email , password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new BadRequestError('Invalid credentials');
        }

        const checkPass = await Password.compare(existingUser.password, password);
        if (!checkPass) {
            throw new BadRequestError('Invalid credentials');
        }

        // JWT Token
        const payload = {
            id: existingUser.id,
            email: existingUser.email
        };
        const jwtToken = process.env.JWT_TOKEN!;

        const userJwtToken = jwt.sign(payload, jwtToken);
        
        // Store in a session object
        req.session = {
            jwt: userJwtToken
        }

        res.status(200).send(existingUser)
});

export { router as SigninRouter }

