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
}
