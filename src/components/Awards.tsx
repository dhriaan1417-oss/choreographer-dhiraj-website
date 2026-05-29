
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Awards = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-black border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <Award className="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Award Winning <span className="text-gradient-gold">Excellence</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"></div>

          <div className="bg-[#111] border border-[#D4AF37]/20 p-8 md:p-12 rounded-lg max-w-4xl w-full shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <h3 className="text-2xl md:text-4xl font-semibold text-[#D4AF37] mb-2 uppercase tracking-wide">
              Zee Gaurav Award
            </h3>
            <p className="text-xl md:text-2xl text-white mb-6 font-light">
              2025 – 2026
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Recognized for outstanding contribution to dance and choreography in the entertainment industry. A testament to creativity, dedication, and the art of storytelling through movement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
