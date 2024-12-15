import Select from "react-select";
import EmptyDivMsg from "./EmptyDivMsg";
import { useMemo, useState } from "react";
import { useItemStore } from "../store/itemsStore";

const sortingOptions = [
  {
    value: "default",
    label: "Sort by default",
  },
  {
    value: "packed",
    label: "Sort by packed",
  },
  {
    value: "unpacked",
    label: "Sort by unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemStore((state) => state.items);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const toggleItem = useItemStore((state) => state.toggleItem);

  const newSortArray = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "packed") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyDivMsg />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {newSortArray.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
