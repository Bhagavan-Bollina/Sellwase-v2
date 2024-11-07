import React from 'react';
import { Leaf, Droplets, Wind } from 'lucide-react';

const stats = [
  {
    icon: Leaf,
    value: '2.5M',
    label: 'kg CO₂ Saved',
    description: 'Through carpooling initiatives'
  },
  {
    icon: Droplets,
    value: '180K',
    label: 'Liters Fuel Saved',
    description: 'By reducing single-occupancy rides'
  },
  {
    icon: Wind,
    value: '15K',
    label: 'Trees Worth',
    description: 'Of carbon offset achieved'
  }
];

export default function Sustainability() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#1877F2]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Driving Sustainable Campus Communities
          </h2>
          <p className="text-xl text-gray-600">
            Every shared ride and reused item contributes to a greener future. Join us in making university life more sustainable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <stat.icon className="w-12 h-12 text-[#1877F2] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#1877F2] mb-2">{stat.value}</div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1877F2]/5 p-8 rounded-2xl">
          <blockquote className="text-xl italic text-center text-gray-700">
            "By choosing to share rides and resources through UniMarket, each student becomes part of a larger movement towards sustainable campus living. Together, we're creating a future where convenience meets responsibility."
          </blockquote>
        </div>
      </div>
    </section>
  );
}