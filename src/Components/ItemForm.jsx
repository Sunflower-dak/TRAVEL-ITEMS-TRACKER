import { useState } from "react";
import Buttons from "./Buttons";

export default function ItemForm() {
  const [valueInput, setValueInput] = useState("");
  const handleValueEvent = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(valueInput);
      }}
    >
      <h2>Add an item</h2>
      <input type="text" value={valueInput} onChange={handleValueEvent} />
      <Buttons>Add to list</Buttons>
    </form>
  );
}
