import { AuthUser, User } from "@prisma/client";

export interface RegisterInterface {
  email: string;
  password: string;
  fullName?:string
}
export interface LoginInterface {
  email: string;
  password: string;
  
}
export interface GetUser {
 Id:string
  
}

export default class AuthenticationServices {
  private constructor() {}
  static async register({ email, password,fullName }: RegisterInterface) {
    return await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password,fullName}),
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
  static async login({
    email,
    password,
  }: LoginInterface): Promise<AuthUser | undefined> {
    return await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
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
  static async getUser(
   Id:string
  ): Promise<User | undefined> {
    return await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ Id }),
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
