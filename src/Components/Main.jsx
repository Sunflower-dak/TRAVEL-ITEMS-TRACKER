import Header from "./Header";
import ItemList from "./ItemList";
import SideEnd from "./SideEnd";
import { useState } from "react";
import { initialItems } from "../Library/objectForItem";

export default function Main() {
  const [items, setItems] = useState(initialItems);

  const handleEventToAddItems = (newItemText) => {
    const newItem = {
      id: Date.now,
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleEventToRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <main>
      <Header />
      <ItemList items={items} />
      <SideEnd
        handleEventToAddItems={handleEventToAddItems}
        handleEventToRemoveAllItems={handleEventToRemoveAllItems}
      />
    </main>
  );
}
