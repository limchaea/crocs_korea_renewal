import { create } from 'zustand'
import newProducts from "../data/new_product_data_v02.json"

export const useNewProductStore = create((set, get) => ({
    items: [],
    onFetchItem: async () => {
        const currentPro = get().items;
        if (currentPro.length > 0) return;
        set({ items: newProducts})
    }
}));
