import { CustomError } from './custom-error';
export declare class DatabaseValidationError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeError(): {
        message: string;
    }[];
}
