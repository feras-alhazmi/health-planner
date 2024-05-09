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
  setAuthUser: (authUser: AuthUser) => void;

  registerAuthUser: ({
    email,

    password,
  }: RegisterInterface) => Promise<AuthUser | undefined>;
  login: ({ email, password }: LoginInterface) => Promise<AuthUser | undefined>;
  // registerUserData: (user: User) => Promise<User | undefined>;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Action>(
    (set, get) => ({
        ...initialState,
      
        registerAuthUser: async (user) => {
          const data = await AuthenticationServices.register(user);
          if (data) {
            set({ ...get(), authUser: data });
          }
          return data;
        },
        login: async (user) => {
          const data = await AuthenticationServices.login(user);
          if (data) {
            set({ ...get(), authUser: data });
          }
          return data;
        },
      
        logout: () => set(initialState),
        setAuthUser: (authUser) => {
          set(
            produce((state) => {
              state.authUser = authUser;
              return state;
            })
          );
        },
      }),
    {
      name: "auth-storage",
      getStorage: () => localStorage 
    }
  )
);

