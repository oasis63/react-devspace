// useCounterStore.tsx
import { create } from "zustand";

type State = {
  count: number;
  step: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<State & Actions>((set) => ({
  count: 0,
  step: 1,
  increment: () => set((state) => ({ count: state.count + state.step })),
  decrement: () => set((state) => ({ count: state.count - state.step })),
  reset: () => set({ count: 0 }),
}));
