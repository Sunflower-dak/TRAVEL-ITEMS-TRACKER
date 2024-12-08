import Header from "./Header";
import ItemList from "./ItemList";
import SideEnd from "./SideEnd";
import { useState } from "react";
import { initialItems } from "../Library/objectForItem";

export default function Main() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <main>
      <Header
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
      <ItemList
        items={items}
        handleEventToDeleteItem={handleEventToDeleteItem}
        handleEventToToggleItem={handleEventToToggleItem}
      />
      <SideEnd
        handleEventToAddItems={handleEventToAddItems}
        handleEventToRemoveAllItems={handleEventToRemoveAllItems}
        handleEventToSetItemsToInitial={handleEventToSetItemsToInitial}
        handleEventToMarkAllComplete={handleEventToMarkAllComplete}
        handleEventToMarkAllInComplete={handleEventToMarkAllInComplete}
      />
    </main>
  );
}
