"use client";

import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">STC</span>
              </div>
              <span className="text-white font-bold text-lg">STC 2025</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Subarja Technology Competition - Empowering the next generation of
              tech innovators.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>SMK Ti Bali Global Jimbaran</span>
            </div>
          </div>

          {/* Competition Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Competition</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Design Poster
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Speed Typing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Digital Art
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Rumus Excel
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Guidelines
                </a> 
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Past Winners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285338001840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp: +62 853-3800-1840 (Felicia)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281529023333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp: +62 815-2902-3333 (Keischa)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4 text-center">
            Lokasi Event
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden glass border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9884726404885!2d115.17517497501599!3d-8.78715219126483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24522d38bc181%3A0x2b7a93761cba8439!2sSMKTI%20Bali%20Global%20Jimbaran!5e0!3m2!1sen!2sid!4v1758799275096!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2025 SMK Ti Bali Global Jimbaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
