const Footer = () => {
  return (
    <div className="mt-32 py-4 flex flex-col items-center gap-10">
      <div className="flex flex-row gap-8 justify-center items-start">
        {/* Baris GitHub */}
        <a href="https://github.com/federycochen2811" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
          <i className="ri-github-fill ri-2x"></i>
          <span className="font-medium">GitHub</span>
        </a>

        {/* Baris Instagram */}
        <a href="https://instagram.com/fedryc_c?igsh=d2ExeXR2dXR1M3J6" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
          <i className="ri-instagram-fill ri-2x"></i>
          <span className="font-medium">Instagram</span>
        </a>

        {/* Baris LinkedIn */}
        <a href="https://linkedin.com/in/federyco-chen" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
          <i className="ri-linkedin-fill ri-2x"></i>
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;