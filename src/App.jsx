import {
  Navbar,
  Footer,
  FAQ,
  GameFeature,
  OnTheWayFeature,
} from "./compononet";

function App() {
  return (
    <div
      // data-theme="luxury"
      className=" "
    >
      <OnTheWayFeature />
      <Navbar />
      <GameFeature />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
