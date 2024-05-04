import { AuthUser } from "@prisma/client";

export interface RegisterInterface {
  email: string;
  password: string;
}
export interface LoginInterface {
  email: string;
  password: string;
}

export default class AuthenticationServices {
  private constructor() {}
  static async register({ email, password }: RegisterInterface) {
    return await fetch("/api/register", {
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
}
