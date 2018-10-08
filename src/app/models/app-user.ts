import { Gender } from './../enums/gender';
export interface AppUser {
    id: string;
    name: string;
    email: string;
    mobile: string;
    gender: Gender;
    birthDate: Date;
    homeArea: string;
    workArea: string;
    isAdmin: boolean;
    points: number;
}