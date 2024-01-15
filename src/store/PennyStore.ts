import { create } from 'zustand';

const usePennyStore = create((set) => ({
  totalPennies: 0,
  maxPennies: 0,
  increaseTotalPennies: (pennies: Number) =>
    set((state: any) => ({ ...state, totalPennies: pennies })),
  setMaxPennies: (pennies: Number) =>
    set((state: any) => ({ ...state, maxPennies: pennies })),
}));

export default usePennyStore;
