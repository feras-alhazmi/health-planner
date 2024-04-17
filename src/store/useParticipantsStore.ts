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
// // Create the store with Zustand, combining the status interface and actions
// export const useCartStore = create<State & Actions>((set, get) => ({
//  totalPrice: INITIAL_STATE.totalPrice,
//  addToCart: (product: Product) => {
//   const cart = get().cart
//   const cartItem = cart.find(item => item.id === product.id)

//   // If the item already exists in the Cart, increase its quantity
//   if (cartItem) {
//    const updatedCart = cart.map(item =>
//     item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
//    )
//    set(state => ({
//     cart: updatedCart,
//     totalItems: state.totalItems + 1,
//     totalPrice: state.totalPrice + product.price,
//    }))
//   } else {
//    const updatedCart = [...cart, { ...product, quantity: 1 }]

//    set(state => ({
//     cart: updatedCart,
//     totalItems: state.totalItems + 1,
//     totalPrice: state.totalPrice + product.price,
//    }))
//   }
//  },
//  removeFromCart: (product: Product) => {
//   set(state => ({
//    cart: state.cart.filter(item => item.id !== product.id),
//    totalItems: state.totalItems - 1,
//    totalPrice: state.totalPrice - product.price,
//   }))
//  },
// }))