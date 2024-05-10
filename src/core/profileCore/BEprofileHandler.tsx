import { Disease, Event, MedicalHistory, Medications, UserMedications } from "@prisma/client";

export default class ProfileHandler {
    private constructor() { }

    static async getDiseases(userId: string): Promise<Disease[]> {
        return await fetch("/api/disease", {
            method: "POST",
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

    static async getMedications(userId: string): Promise<Medications[]> {
        return await fetch("/api/medications", {
            method: "POST",
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

    static async getEvents(userId: string): Promise<Event[]> {
        return await fetch("/api/events", {
            method: "POST",
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

