import { useItemContext } from "../Library/hooks";
import ButtonGroup from "./ButtonGroup";
import ItemForm from "./ItemForm";

export default function SideEnd() {
  const { handleEventToAddItems } = useItemContext();

  return (
    <div className="sidebar">
      <ItemForm onAddItems={handleEventToAddItems} />
      <ButtonGroup />
    </div>
  );
}
