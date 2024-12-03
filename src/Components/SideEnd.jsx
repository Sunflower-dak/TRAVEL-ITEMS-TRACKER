import ButtonGroup from "./ButtonGroup";
import ItemForm from "./ItemForm";

export default function SideEnd({ setItems }) {
  return (
    <div className="sidebar">
      <ItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
