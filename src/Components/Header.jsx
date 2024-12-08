import Logo from "./Logo";
import Metric from "./Metric";

export default function Header({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Metric
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}
