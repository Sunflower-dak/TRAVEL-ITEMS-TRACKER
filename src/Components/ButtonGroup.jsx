import { useItemStore } from "../store/itemsStore";
import Buttons from "./Buttons";

export default function ButtonGroup() {
  const removeAllItems = useItemStore((state) => state.removeAllItems);
  const markAllComplete = useItemStore((state) => state.markAllComplete);
  const markAllInComplete = useItemStore((state) => state.markAllInComplete);
  const setItemsToInitial = useItemStore((state) => state.setItemsToInitial);

  return (
    <section className="button-group">
      <Buttons buttonType="secondary" onClick={markAllComplete}>
        Mark all as complete
      </Buttons>
      <Buttons buttonType="secondary" onClick={markAllInComplete}>
        Mark all as incomplete
      </Buttons>
      <Buttons buttonType="secondary" onClick={setItemsToInitial}>
        Reset to initial
      </Buttons>
      <Buttons buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Buttons>
    </section>
  );
}
