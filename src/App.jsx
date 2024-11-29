import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Personal from "./pages/personal";
import Commissions from "./pages/commissions";

function App() {
  return (
    <div className=" bg-babyBlue min-h-screen flex flex-col">
      <Router>
        <div className="fixed w-full h-auto z-100">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
