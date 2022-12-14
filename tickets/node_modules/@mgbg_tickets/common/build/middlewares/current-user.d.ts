import { Request, Response, NextFunction } from 'express';
interface UserPayload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentuser?: UserPayload;
            session?: any;
        }
    }
}
export declare const currentuser: (req: Request, res: Response, next: NextFunction) => void;
export {};
