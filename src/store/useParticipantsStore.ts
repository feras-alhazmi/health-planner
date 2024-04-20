import { create } from "zustand"

// Define the interface of the Cart state
interface State {
    searchQuery: string
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
    setSearchQuery: (query: string) => void
    getSearchQuery: () => string
}

// Initialize a default state
const INITIAL_STATE: State = {
    searchQuery: '',
}

export const useParticipantsStore = create<State & Actions>((set, get) => ({
    searchQuery: INITIAL_STATE.searchQuery,

    setSearchQuery: (query: string) => {
        set({ searchQuery: query });
    },

    getSearchQuery: () => {
        return get().searchQuery;
    }
}))