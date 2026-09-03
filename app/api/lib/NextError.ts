export class NextError extends Error {
    statusCode: number;
    NextError: string;
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.NextError = "NextError";
    }
}