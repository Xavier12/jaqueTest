export interface User {
    picture: string;
    name: string;
    fathersLastName: string;
    mothersLastName: string;
    email: string;
    roleId: number;
    active: boolean;
    roleName?: string;
}

export interface UserArray {
    users: User[];
}