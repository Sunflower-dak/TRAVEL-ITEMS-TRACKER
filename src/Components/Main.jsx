import Header from "./Header";
import ItemList from "./ItemList";
import SideEnd from "./SideEnd";
import { useState } from "react";
import { initialItems } from "../Library/objectForItem";

export default function Main() {
  const [items, setItems] = useState(initialItems);
  return (
    <main>
      <Header />
      <ItemList items={items} />
      <SideEnd setItems={setItems} />
    </main>
  );
}
