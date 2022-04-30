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
    <div>
      <Navbar />
      <GameFeature />
      <OnTheWayFeature />
      <FeatureList />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
