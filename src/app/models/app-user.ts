import { Gender } from './../enums/gender';
export interface AppUser {
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