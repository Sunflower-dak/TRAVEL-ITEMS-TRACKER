import { initialItems } from "../Library/objectForItem";

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
