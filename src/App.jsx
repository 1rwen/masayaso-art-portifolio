import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Personal from "./pages/personal";
import Commissions from "./pages/commissions";
import { motion, AnimatePresence } from "framer-motion";

// PageWrapper Component
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 0.3, // Slightly shorter duration for smoother transition
      ease: "easeInOut", // Smooth easing function
    }}
    style={{
      // Important for preventing layout shifts
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </motion.div>
);

// Main App Component
function App() {
  return (
    <div className="bg-babyBlue min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Navbar />
      </div>

      {/* Content Wrapper */}
      <div className="pt-[64px]">
        <Router>
          <PageTransitionWrapper />
        </Router>
      </div>
    </div>
  );
}


// PageTransitionWrapper Component
function PageTransitionWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/commissions"
          element={
            <PageWrapper>
              <Commissions />
            </PageWrapper>
          }
        />
        <Route
          path="/personal"
          element={
            <PageWrapper>
              <Personal />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
