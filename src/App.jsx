import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Personal from "./pages/personal";
import Commissions from "./pages/commissions";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
    <div className="bg-babyBlue min-h-screen flex flex-col">
      <Router>
        <div className="fixed w-full h-auto z-50">
          <Navbar />
        </div>

        {/* Page transition wrapper */}
        <PageTransitionWrapper />
        <Analytics />
      </Router>
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
