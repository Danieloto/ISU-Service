export interface User {
    ID: number;
    Name: string;
    Email: string;
    PasswordHash: string;
    PasswordSalt: string;
}

export interface CheckUser {
    Name: string;
    PasswordHash: string;
    PasswordSalt: string;
}

