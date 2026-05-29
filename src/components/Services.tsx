
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Film Work',
    description: 'Cinematic dance sequences that bring stories to life on the big screen.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop',
  },
  {
    title: 'Wedding Choreography',
    description: 'Opulent and personalized dance routines for unforgettable luxury weddings.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Live Shows',
    description: 'Electrifying stage performances that captivate massive audiences.',
    image: 'https://images.unsplash.com/photo-1540039155733-5b82c55b4b72?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Celebrity Events',
    description: 'High-profile choreography tailored for celebrities and elite events.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-medium mb-4">Areas of Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Signature <span className="text-gradient-gold">Services</span>
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-1 bg-[#D4AF37] mb-4 scale-0 group-hover:scale-100 origin-left transition-transform duration-500 delay-100"></div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
