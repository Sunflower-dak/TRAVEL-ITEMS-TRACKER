import EmptyDivMsg from "./EmptyDivMsg";

export default function ItemList({
  items,
  handleEventToDeleteItem,
  handleEventToToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyDivMsg />}

      {items.map((item) => {
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
