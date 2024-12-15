import { useItemStore } from "../store/itemsStore";
import ButtonGroup from "./ButtonGroup";
import ItemForm from "./ItemForm";

export default function SideEnd() {
  const addItems = useItemStore((state) => state.addItems);

  return (
    <div className="sidebar">
      <ItemForm onAddItems={addItems} />
      <ButtonGroup />
    </div>
  );
}
