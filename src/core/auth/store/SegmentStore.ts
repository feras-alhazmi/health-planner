
import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";


// Define the structure of the Segment object

interface Segment {
  name: String;
  Id: String;
}
// Define the structure of the state
interface State {
  currentSegment: Segment;
}

// Define the actions available in the store
interface Action {
  setSegment: (Segment: Segment) => void;
  //clearSegment: () => void;
  
}

// Initial state for the store
const initialState: State = {
  currentSegment: {name:"Inbox",Id:"Inbox"},
};


export const useSegement = create(
  persist<State & Action>(
    (set) => ({
      ...initialState,
      setSegment: (Segment: Segment) => set({ currentSegment: Segment }),
      //clearSegment: () => set({ currentSegment: undefined }),
    }),
    {
      name: "SegmentStorage", 
      storage:createJSONStorage(() => localStorage)
    }
  )
);
