import BackgroundHeader from "./BackgroundHeader";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideEnd from "./SideEnd";

function App() {
  return (
    <>
      <BackgroundHeader />

      <main>
        <Header />
        <ItemList />
        <SideEnd />
      </main>

      <Footer />
    </>
  );
}

export default App;
