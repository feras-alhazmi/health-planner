import { Disease, Event, Measurements, MedicalHistory, Medications, UserMedications } from "@prisma/client";


export interface GetUserP {
    Id: string
}
export default class ProfileHandler {
    private constructor() { }


    static async getDiseases(Id: GetUserP): Promise<Disease[]> {
        return await fetch("/api/disease", {
            method: "POST",
            body: JSON.stringify(Id),
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

    static async getMedications(Id: GetUserP): Promise<Medications[]> {
        return await fetch("/api/medications", {
            method: "POST",
            body: JSON.stringify(Id),
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

    static async getEvents(Id: GetUserP): Promise<Event[]> {
        return await fetch("/api/events", {
            method: "POST",
            body: JSON.stringify(Id),

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

    static async getMeasurements(Id: GetUserP): Promise<Measurements[]> {
        return await fetch("/api/measurements", {
            method: "POST",
            body: JSON.stringify(Id),

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

