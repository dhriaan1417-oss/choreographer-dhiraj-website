import { useEffect, useState, useRef } from "react";

import { motion, useInView } from 'framer-motion';

const Counter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);

        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

        setCount(Math.floor(easeOutQuart * end));

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Legacy = () => {
  return (
    <section id="about" className="py-24 bg-black relative border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-medium mb-4">The Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Movement Since <span className="text-gradient-gold">2006</span>
            </h3>

            <p className="text-gray-400 text-lg mb-6 font-light leading-relaxed">
              With a visionary approach to dance and storytelling, Dhiiraj Bhalerao has established himself as a premier name in luxury Bollywood choreography.
            </p>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              From high-budget film sequences to opulent destination weddings and electrifying live shows, his signature style blends classical grace with contemporary dynamism, leaving audiences mesmerized.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter end={18} />+
                </p>
                <p className="text-[#D4AF37] text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter end={500} />+
                </p>
                <p className="text-[#D4AF37] text-sm uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop"
                alt="Choreographer Dhiiraj Bhalerao in action"
                className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-bold text-xl tracking-wider">DHIIRAJ BHALERAO</p>
                <p className="text-[#D4AF37] text-sm uppercase tracking-widest">Master Choreographer</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37] z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37] z-0 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Legacy;
