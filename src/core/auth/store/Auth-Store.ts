import { AuthUser, User } from "@prisma/client";
import { create } from "zustand";
import { RegisterInterface } from "../services/Auth-Services";
import AuthenticationServices, {
  LoginInterface,
} from "../services/Auth-Services";
import { produce } from "immer";
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
  authUser: undefined,
  userData: undefined,
};

type State = {
  authUser: AuthUser | undefined;
  userData: User | undefined;
};

type Action = {

  registerAuthUser: ({
    email,
    password,
    fullName
  }: RegisterInterface) => Promise<AuthUser | undefined>;
  login: ({ email, password }: LoginInterface) => Promise<AuthUser | undefined>;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Action>(
    (set, get) => ({
        ...initialState,
      
        registerAuthUser: async (user) => {
          const data = await AuthenticationServices.register(user);
          return data;
        },
        login: async (user) => {
          const data = await AuthenticationServices.login(user);
          if (data) {
            const userData = await AuthenticationServices.getUser(data.Id);
            console.log(userData?.fullName+"this is working and assigned to user data")

            if (userData) {
              set({ ...get(), authUser: data,userData: userData});
            }
            set({ ...get(), authUser: data, });
          }
          return data;
        },
      
        logout: () => set(initialState),
     
      }),
    {
      name: "auth-storage",
      getStorage: () => localStorage 
    }
  )
);

