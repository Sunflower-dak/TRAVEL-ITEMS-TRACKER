import { useItemStore } from "../store/itemsStore";
import Logo from "./Logo";
import Metric from "./Metric";

export default function Header() {
  const items = useItemStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Metric
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
