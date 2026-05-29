
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Placeholder Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
          alt="Choreography background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          Luxury Bollywood Choreography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          DHIIRAJ <br className="md:hidden" />
          <span className="shimmer-text">BHALERAO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Crafting unforgettable cinematic dance experiences for films, weddings, and live shows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#showreel" className="px-8 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-wider hover:bg-white transition-colors duration-300">
            Watch Showreel
          </a>
          <a href="#contact" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
            Book an Enquiry
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
