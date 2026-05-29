
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-medium mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Book an <span className="text-gradient-gold">Enquiry</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-semibold text-white mb-8">Contact Information</h4>

            <div className="space-y-6 mb-12">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center mr-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center mr-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white text-lg">booking@dhiirajbhalerao.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center mr-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white text-lg">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-white mb-6">Follow The Journey</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-gray-400">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-gray-400">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-gray-400">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] p-8 md:p-10 rounded-lg border border-[#D4AF37]/20 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                <select
                  id="service"
                  className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                >
                  <option value="" disabled selected>Select a Service</option>
                  <option value="film">Film Choreography</option>
                  <option value="wedding">Wedding Choreography</option>
                  <option value="live">Live Show / Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-[#D4AF37] text-black font-semibold uppercase tracking-wider py-4 hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
