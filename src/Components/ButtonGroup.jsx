import Buttons from "./Buttons";

export default function ButtonGroup({
  handleEventToRemoveAllItems,
  handleEventToSetItemsToInitial,
  handleEventToMarkAllComplete,
  handleEventToMarkAllInComplete,
}) {
  return (
    <section className="button-group">
      <Buttons buttonType="secondary" onClick={handleEventToMarkAllComplete}>
        Mark all as complete
      </Buttons>
      <Buttons buttonType="secondary" onClick={handleEventToMarkAllInComplete}>
        Mark all as incomplete
      </Buttons>
      <Buttons buttonType="secondary" onClick={handleEventToSetItemsToInitial}>
        Reset to initial
      </Buttons>
      <Buttons buttonType="secondary" onClick={handleEventToRemoveAllItems}>
        Remove all items
      </Buttons>
    </section>
  );
}
