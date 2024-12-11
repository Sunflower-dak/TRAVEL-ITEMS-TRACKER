import ItemContextsProvider from "../Contexts/ItemContextsProvider";
import Header from "./Header";
import ItemList from "./ItemList";
import SideEnd from "./SideEnd";

export default function Main() {
  return (
    <main>
      <ItemContextsProvider>
        <Header />
        <ItemList />
        <SideEnd />
      </ItemContextsProvider>
    </main>
  );
}
