import { create } from "zustand";

export const useColorFilterStore = create((set) => ({
  selectedColors: [],

  toggleColor: (color) =>
    set((state) => {
      const newValues = Array.isArray(color.value)
        ? color.value
        : [color.value];
      const exists = state.selectedColors.some((selected) => {
        const selectedValues = Array.isArray(selected.value)
          ? selected.value
          : [selected.value];
        return newValues.some((v) => selectedValues.includes(v));
      });

      let result;
      if (exists) {
        result = state.selectedColors.filter((selected) => {
          const selectedValues = Array.isArray(selected.value)
            ? selected.value
            : [selected.value];
          return !newValues.some((v) => selectedValues.includes(v));
        });
      } else {
        result = [...state.selectedColors, color];
      }

      return { selectedColors: result };
    }),

  clearColors: () => set({ selectedColors: [] }),
}));
