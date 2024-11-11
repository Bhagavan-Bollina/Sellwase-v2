import React from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section
      className="container mx-auto section__instagram py-20 bg-gradient-to-b from-white to-[#1877F2]/5"
      data-instagram-page="thesellwase"
      data-snippet="s_instagram_page"
      data-name="Instagram Page"
    >
      <div className="container mx-auto px-4">
        {/* Header with Instagram Icon and Title */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Instagram className="w-8 h-8 text-[#1877F2]" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Follow Us @thesellwase</h2>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center">
          <iframe
            title="Instagram Feed"
            className="w-full max-w-4xl aspect-square rounded-xl overflow-hidden shadow-lg"
            height="600"
            scrolling="no"
            aria-label="Instagram"
            src="https://www.instagram.com/thesellwase/embed"
          ></iframe>
        </div>

        {/* Follow Us Button */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/thesellwase/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1877F2] to-[#1877F2]/80 text-white px-8 py-3 rounded-full hover:from-[#1877F2]/90 hover:to-[#1877F2]/70 transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
