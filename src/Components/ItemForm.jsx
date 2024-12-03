import { useRef, useState } from "react";
import Buttons from "./Buttons";

export default function ItemForm({ setItems }) {
  const [valueInput, setValueInput] = useState("");
  const refHook = useRef();

  const HandleSubmitEvent = (e) => {
    e.preventDefault();

    if (!valueInput) {
      alert("Kindly input an item");
      refHook.current.focus();
      return;
    }

    const newItem = {
      id: Date.now,
      name: valueInput,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setValueInput("");
    refHook.current.focus();
  };

  const handleValueEvent = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <form onSubmit={HandleSubmitEvent}>
      <h2>Add an item</h2>
      <input
        ref={refHook}
        type="text"
        value={valueInput}
        onChange={handleValueEvent}
        autoFocus
      />
      <Buttons>Add to list</Buttons>
    </form>
  );
}
