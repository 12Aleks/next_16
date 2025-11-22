

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export class ApiError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}