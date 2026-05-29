
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Legacy from './components/Legacy';
import Services from './components/Services';
import Showreel from './components/Showreel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <Hero />
      <Awards />
      <Legacy />
      <Services />
      <Showreel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
