
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#142B4A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold">
              Urban<span className="text-orange-400">Connect</span>
            </h2>

            <p className="text-gray-300 text-sm mt-4 leading-6 max-w-sm">
              Bringing people together to create positive changes in our
              communities through social events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-orange-400">Home</Link>
              <Link href="/upcoming-events" className="hover:text-orange-400">
                Upcoming Events
              </Link>
              <Link href="/login" className="hover:text-orange-400">Login</Link>
              <Link href="/register" className="hover:text-orange-400">Register</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

            <p className="text-gray-300 text-sm mb-5">
              Have questions? Get in touch with us.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaLinkedinIn size={21} />
              </a>

              <a
                href="mailto:contact@urbanconnect.com"
                aria-label="Email"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaEnvelope size={21} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2026 Urban Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
