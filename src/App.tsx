import Header from './components/Header';
import Hero from './components/Hero';
import Sustainability from './components/Sustainability';
import Features from './components/Features';
import Traction from './components/Traction';
import Partners from './components/Partners';
import InstagramFeed from './components/InstagramFeed';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import { ModalProvider } from './components/ModalContext';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Sustainability />
        <Features />
        <Traction />
        <Partners />
        <InstagramFeed />
        <About />
        <Contact />
        <Legal />
        <Footer />
        {/* Render Modal at the top level */}
        <DownloadModal />
      </div>
    </ModalProvider>
  );
}

export default App;
