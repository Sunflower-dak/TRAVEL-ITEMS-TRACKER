import ButtonGroup from "./ButtonGroup";
import ItemForm from "./ItemForm";

export default function SideEnd({
  handleEventToAddItems,
  handleEventToRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <ItemForm onAddItems={handleEventToAddItems} />
      <ButtonGroup handleEventToRemoveAllItems={handleEventToRemoveAllItems} />
    </div>
  );
}
