import { createContext, useEffect, useState } from "react";
import { initialItems } from "../Library/objectForItem";

export const ItemContext = createContext();

export default function ItemContextsProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleEventToAddItems = (newItemText) => {
    const newItem = {
      id: Date.now(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleEventToDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleEventToRemoveAllItems = () => {
    setItems([]);
  };

  const handleEventToSetItemsToInitial = () => {
    setItems(initialItems);
  };

  const handleEventToMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleEventToMarkAllInComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleEventToToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider
      value={{
        items,
        handleEventToAddItems,
        handleEventToDeleteItem,
        handleEventToToggleItem,
        handleEventToRemoveAllItems,
        handleEventToMarkAllComplete,
        handleEventToMarkAllInComplete,
        handleEventToSetItemsToInitial,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
