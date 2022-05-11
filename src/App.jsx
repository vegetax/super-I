import { Navbar, Footer, FAQ, GameFeature } from "./compononet";

function App() {
  return (
    <div
      // data-theme="luxury"
      className=" "
    >
      <Navbar />
      <GameFeature />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
