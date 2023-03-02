import { RoleEnum } from "./enums/Role";

export interface User {
    id?: string;
    name?: string;
    email?: string;
    location?: string;
    role?: RoleEnum;
    level?: number;
    balance?: number;
}