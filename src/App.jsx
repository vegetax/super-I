import {
  Navbar,
  KryptobirdzApp,
  Footer,
  FAQ,
  GameFeature,
  FeatureList,
  OnTheWayFeature,
} from "./compononet";

function App() {
  return (
    <div
      // data-theme="luxury"
      className="bg-gradient-to-b from-black   to-purple-900"
    >
      <Navbar />
      <GameFeature />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
