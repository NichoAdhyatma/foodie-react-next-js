import create  from "zustand";

export const useStore = create((set) => ({
  cart: {
    pizzas: [],
  },

  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),
}));
