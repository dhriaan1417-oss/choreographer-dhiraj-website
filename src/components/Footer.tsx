

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-wider text-white">
              DHIIRAJ <span className="text-[#D4AF37]">BHALERAO</span>
            </a>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">Master Choreographer</p>
          </div>

          <div className="flex space-x-6 text-sm uppercase tracking-wider text-gray-400">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-900 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Dhiiraj Bhalerao. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
