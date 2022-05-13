import {
  Navbar,
  Footer,
  FAQ,
  GameFeature,
  OnTheWayFeature,
} from "./compononet";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
        <GameFeature />
        <FAQ />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
