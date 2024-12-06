import ButtonGroup from "./ButtonGroup";
import ItemForm from "./ItemForm";

export default function SideEnd({
  handleEventToAddItems,
  handleEventToRemoveAllItems,
  handleEventToSetItemsToInitial,
  handleEventToMarkAllComplete,
  handleEventToMarkAllInComplete,
}) {
  return (
    <div className="sidebar">
      <ItemForm onAddItems={handleEventToAddItems} />
      <ButtonGroup
        handleEventToRemoveAllItems={handleEventToRemoveAllItems}
        handleEventToSetItemsToInitial={handleEventToSetItemsToInitial}
        handleEventToMarkAllComplete={handleEventToMarkAllComplete}
        handleEventToMarkAllInComplete={handleEventToMarkAllInComplete}
      />
    </div>
  );
}
