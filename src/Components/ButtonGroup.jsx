import Buttons from "./Buttons";
import { buttonsArray } from "../Library/buttonsArray";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonsArray.map((text) => {
        return (
          <Buttons type="secondary" key={text}>
            {text}
          </Buttons>
        );
      })}
    </section>
  );
}
