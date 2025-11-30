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

export type IUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
    phone: string,
    website: string,
    company: ICompany
}

type IAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
    }

type IGeo = {
    lat: string,
    lng: string
}

type ICompany = {
    name: string,
    catchPhrase: string,
    bs: string
}