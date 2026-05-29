
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const Showreel = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="showreel" className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yPos }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1533596700812-4c6e93de857f?q=80&w=2070&auto=format&fit=crop"
          alt="Showreel background"
          className="w-full h-full object-cover object-center scale-125"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center group hover:bg-[#D4AF37]/20 transition-all duration-300 relative">
            <div className="absolute inset-0 rounded-full border border-[#D4AF37] scale-110 animate-ping opacity-20"></div>
            <Play className="w-10 h-10 text-[#D4AF37] ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          </button>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider"
        >
          WATCH <span className="text-gradient-gold">SHOWREEL</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-lg md:text-xl font-light uppercase tracking-[0.2em]"
        >
          Experience the Magic of Movement
        </motion.p>
      </div>
    </section>
  );
};

export default Showreel;
