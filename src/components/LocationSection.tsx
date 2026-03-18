import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const LocationSection = () => {
  return (
    <section id="location" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/20 to-vanilla" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="label-text mb-5 block">Visit Us</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-cocoa">
            Find Your Way to Indulgence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="rounded-[24px] overflow-hidden shadow-cinema h-[380px] md:h-[440px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7736!2d77.2370!3d28.5670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAxLjIiTiA3N8KwMTQnMTMuMiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(0.12) saturate(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nante Patisserie location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex flex-col gap-6"
          >
            <div className="card-cinema p-8 md:p-10">
              {[
                { icon: MapPin, title: "Address", content: "A55, Block A, Dayanand Colony, Lajpat Nagar, New Delhi, Delhi 110024" },
                { icon: Clock, title: "Hours", content: "Open daily · 9:00 AM — 8:00 PM" },
                { icon: Phone, title: "Phone", content: "063811 51942", href: "tel:06381151942" },
              ].map((item, i) => (
                <div key={item.title} className={`flex items-start gap-5 ${i < 2 ? 'mb-8' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-butter/60 to-caramel/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-mocha" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cocoa mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-mocha/70 text-sm hover:text-cocoa transition-colors">{item.content}</a>
                    ) : (
                      <p className="text-mocha/70 text-sm leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={14} />
                View Menu
              </a>
              <a
                href="https://maps.google.com/?q=A55+Block+A+Dayanand+Colony+Lajpat+Nagar+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MapPin size={14} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
