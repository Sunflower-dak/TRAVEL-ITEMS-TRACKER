import { create } from "zustand";
import { initialItems } from "../Library/objectForItem";

export const useItemStore = create((set) => ({
  items: initialItems,
  addItems: (newItemText) => {
    const newItem = {
      id: Date.now(),
      name: newItemText,
      packed: false,
    };
    set((state) => {
      items = [...state.items, newItem];
      return { items: newItem };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }

        return item;
      });
      return { items: newItems };
    });
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  markAllComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });

      return { items: newItems };
    });
  },
  markAllInComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { item: newItems };
    });
  },
  setItemsToInitial: () => {
    set(() => ({ items: initialItems }));
  },
}));
