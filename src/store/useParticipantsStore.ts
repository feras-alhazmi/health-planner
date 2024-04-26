import { Filteration } from "@/app/features/types"
import { create } from "zustand"

// Define the interface of the Cart state
interface State {
    searchQuery: string,
    filteration: Filteration[]
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
    setSearchQuery: (query: string) => void
    getSearchQuery: () => string,
    setFilteration: (filteration: Filteration[]) => void
    getFilteration: () => Filteration[]
}

// Initialize a default state
const INITIAL_STATE: State = {
    searchQuery: '',
    filteration: [
        {
            attribute: 'age',
            value: 'select'
        },
        {
            attribute: 'gender',
            value: 'select'
        },
        {
            attribute: 'dateJoined',
            value: 'select'
        },
        {
            attribute: 'lastActivity',
            value: 'select'
        }
    ]
}

export const useParticipantsStore = create<State & Actions>((set, get) => ({
    searchQuery: INITIAL_STATE.searchQuery,
    filteration: INITIAL_STATE.filteration,

    setSearchQuery: (query: string) => {
        set({ searchQuery: query });
    },

    getSearchQuery: () => {
        return get().searchQuery;
    },

    setFilteration: (filteration: Filteration[]) => {
        set({ filteration });
    },

    getFilteration: () => {
        return get().filteration;
    }
}))