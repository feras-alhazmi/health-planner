import { diseaseSchema, medicalHistorySchema } from '@/lib/joi/schema/schema';
import { TempUser } from '../tempUser';


export default class ProfileHandler {
    private constructor() { }
    static async postUser(tempUser: TempUser) {
        return await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify(tempUser),
        })
            .then(async (res) => {
                if (res.status == 200) {
                    return await res.json();
                } else {
                    return undefined;
                }
            })
            .catch((error) => {
                console.error(error);
                return undefined;
            });
    }

    static async getUserByEmail(email: string) {
        return await fetch("/api/profile", {
            method: "GET",
        })
            .then(async (res) => {
                if (res.ok) {
                    return await res.json();
                } else {
                    const errorData = await res.json();
                    throw new Error(errorData.error || 'Failed to fetch user');
                }
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}
