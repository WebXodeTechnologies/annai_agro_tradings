import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CONTACT_DETAILS } from "@/constants";
import logo from "@/public/logo/Logo1.png";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import bg from "@/public/hero/pattern-27.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: CONTACT_DETAILS.socials.linkedin,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: `https://wa.me/${CONTACT_DETAILS.socials.whatsapp}`,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: CONTACT_DETAILS.socials.instagram,
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: CONTACT_DETAILS.socials.youtube,
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: `mailto:${CONTACT_DETAILS.email}`,
    },
  ];

  return (
    <footer
      className="relative w-full overflow-hidden mt-20 bg-[#0a1a0a]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Background Layer - Optimized with CSS for performance instead of heavy images if possible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bg}
          alt="backgroundbanner"
          fill
          className="object-cover mix-blend-exclusion"
        />
        <div className="absolute inset-0 bg-linear-to-br from-10% to-15% opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Identity Section */}
          <section className="lg:col-span-4 space-y-8">
            <Link
              href="/"
              className="inline-block group"
              title="Annai Agro Tradings Home"
            >
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl backdrop-blur-md border border-white/10 group-hover:border-[#67944e]/50 transition-all duration-500">
                <div className="relative w-14 h-14 brightness-0 invert">
                  <Image
                    src={logo}
                    alt="Annai Agro Tradings Logo"
                    width={56}
                    height={56}
                    className="object-contain p-1"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-black text-white tracking-tight">
                    ANNAI AGRO
                  </span>
                  <span className="text-[10px] text-[#86b06a] font-bold tracking-[0.3em] uppercase">
                    Tradings
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Premier{" "}
              <strong className="text-white font-semibold">
                agro products exporter
              </strong>{" "}
              &
              <strong className="text-white font-semibold">
                {" "}
                B2B food supplier
              </strong>
              . Certified by{" "}
              <strong className="text-white font-semibold">
                APEDA, FSSAI, & Spices Board
              </strong>
              . Delivering premium organic spices and millets globally with
              uncompromised quality.
            </p>

            {/* Social Links with ARIA labels */}
            <nav className="flex gap-4" aria-label="Social Media Links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#67944e] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </nav>
          </section>

          {/* Quick Navigation - Optimized with Nav Tag */}
          <nav className="lg:col-span-2 lg:ml-8" aria-label="Footer Navigation">
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-[#67944e]"
                aria-hidden="true"
              ></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 flex items-center group"
                  >
                    <span
                      className="w-0 group-hover:w-4 h-px bg-[#67944e] transition-all duration-300 mr-0 group-hover:mr-2"
                      aria-hidden="true"
                    ></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details Card */}
          <section className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-linear-to-r from-[#67944e]/20 to-transparent blur-2xl rounded-3xl cursor-pointer hover:border-y-indigo-100" />
            <div className="relative bg-[#ffffff08] backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-white font-normal mb-10 text-xl tracking-wide">
                Connect with Our Global Trade Desk
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <address className="not-italic space-y-4">
                  <div className="flex items-center gap-3 text-[#86b06a] uppercase text-[12px] font-black tracking-widest">
                    <FaMapMarkerAlt aria-hidden="true" /> Registered Office
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {CONTACT_DETAILS.address}
                  </p>
                </address>

                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="text-[#86b06a] uppercase text-[12px] font-black tracking-widest mb-2 flex items-center gap-2">
                      <FaWhatsapp aria-hidden="true" /> Sales Helpline
                    </div>
                    <a
                      href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}
                      className="text-white block font-bold text-base tracking-wide group-hover:text-[#86b06a] transition-colors"
                    >
                      {CONTACT_DETAILS.phone}
                    </a>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="text-[#86b06a] uppercase text-[12px] font-black tracking-widest mb-2 flex items-center gap-2">
                      <FaEnvelope aria-hidden="true" /> Email Support
                    </div>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-slate-300 block font-bold text-sm truncate group-hover:text-[#86b06a] transition-colors"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4">
                <div
                  className="h-px flex-1 bg-linear-to-r from-[#67944e]/40 to-transparent"
                  aria-hidden="true"
                />
                <p className="text-[#86b06a] font-black text-[15px]  uppercase">
                  Soil is the source of life
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-300 text-[10px] font-black tracking-[0.2em] uppercase">
            © {currentYear} Annai Agro Tradings
          </p>
          <div className="flex items-center justify-center">
            <p className="text-slate-300 text-[12px] font-bold tracking-wide">
              Developed by
              <a
                href="https://www.webxode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86b06a] hover:text-white transition-all duration-300 ml-2 border-b border-[#86b06a]/20 hover:border-[#86b06a]"
              >
                Webxode Technologies
              </a>
            </p>
          </div>

          <nav
            className="flex gap-10 text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase"
            aria-label="Policy Links"
          >
            {["Privacy", "Terms", "Compliance"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-slate-300 hover:text-[#67944e] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
