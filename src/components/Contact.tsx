import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#1877F2]" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Innovation Drive<br />Silicon Valley, CA 94025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#1877F2]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@Sellwase.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#1877F2]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1877F2] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1877F2] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1877F2] focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1877F2] text-white py-3 rounded-lg hover:bg-[#1877F2]/90">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}