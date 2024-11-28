import Buttons from "./Buttons";

export default function ItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" />
      <Buttons>Add to list</Buttons>
    </form>
  );
}
