import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sustainability from "./components/Sustainability";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DownloadModal from "./components/DownloadModal";
import { ModalProvider } from "./components/ModalContext";
import Legal from "./components/Legal";

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="min-h-screen bg-white">
          {/* Render Modal at the top level */}
          <DownloadModal />
          <Routes>
            {/* Main homepage route */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Sustainability />
                  <Features />
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Legal page route */}
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
