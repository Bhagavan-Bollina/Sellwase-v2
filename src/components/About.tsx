import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Sellwase</h1>
          <p className="text-xl text-gray-600">
            Transforming campus life through technology and community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <Target className="w-12 h-12 text-[#1877F2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create a seamless, sustainable, and connected campus experience for students worldwide.
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-[#1877F2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Community, sustainability, innovation, and trust drive everything we do.
            </p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-[#1877F2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where every campus is connected, sustainable, and thriving.
            </p>
          </div>
        </div>

        <div className="bg-[#1877F2]/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Founded by students who experienced firsthand the challenges of campus life, Sellwase began as a simple idea in a dorm room. We recognized the need for a unified platform that could make student life more efficient, affordable, and sustainable.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to serve thousands of students across multiple universities, helping them save money, reduce their carbon footprint, and build lasting connections within their campus communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}