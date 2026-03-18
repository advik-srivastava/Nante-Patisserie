const Footer = () => {
  return (
    <footer className="py-16 bg-cocoa relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-mocha/15 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-3xl font-light text-vanilla/90 mb-4">Nanté</h3>
            <p className="text-vanilla/35 text-sm leading-relaxed">
              South Delhi's premier pastry atelier, specializing in customized theme cakes and handcrafted confections.
            </p>
          </div>
          <div>
            <h4 className="text-vanilla/25 text-[10px] uppercase tracking-[0.2em] font-medium mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Offerings", href: "#offerings" },
                { label: "Custom Cakes", href: "#custom" },
                { label: "Gallery", href: "#gallery" },
                { label: "Visit Us", href: "#location" },
                { label: "Menu", href: "https://zomato.com" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-vanilla/40 text-sm hover:text-vanilla/70 transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-vanilla/25 text-[10px] uppercase tracking-[0.2em] font-medium mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-vanilla/40 text-sm">
              <p>A55, Block A, Dayanand Colony</p>
              <p>Lajpat Nagar, New Delhi 110024</p>
              <a href="tel:06381151942" className="hover:text-vanilla/70 transition-colors duration-300">063811 51942</a>
              <p>Open daily · 9 AM — 8 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-vanilla/8 pt-8 text-center">
          <p className="text-vanilla/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Nante Patisserie & Confectionery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
