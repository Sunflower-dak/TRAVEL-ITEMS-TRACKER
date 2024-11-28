import Buttons from "./Buttons";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Buttons type="secondary">Mark all as complete</Buttons>
      <Buttons type="secondary">Mark all as incomplete</Buttons>
      <Buttons type="secondary">Reset to initial</Buttons>
      <Buttons type="secondary">Remove all items</Buttons>
    </section>
  );
}
