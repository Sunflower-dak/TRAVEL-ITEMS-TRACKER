import { useItemContext } from "../Library/hooks";
import Logo from "./Logo";
import Metric from "./Metric";

export default function Header() {
  const { items } = useItemContext();

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
