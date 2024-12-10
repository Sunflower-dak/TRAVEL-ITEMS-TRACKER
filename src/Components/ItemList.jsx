import Select from "react-select";
import EmptyDivMsg from "./EmptyDivMsg";
import { useMemo, useState } from "react";

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

export default function ItemList({
  items,
  handleEventToDeleteItem,
  handleEventToToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

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
            onDeleteItem={handleEventToDeleteItem}
            onToggleItem={handleEventToToggleItem}
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
