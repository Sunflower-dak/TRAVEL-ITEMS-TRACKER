export default function Metric({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <p className="counter">
      <b>{numberOfItemsPacked}</b>/ {totalNumberOfItems} items packed
    </p>
  );
}
