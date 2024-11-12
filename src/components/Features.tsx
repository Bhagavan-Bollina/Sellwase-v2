import { Car, ShoppingBag, Users, Shield } from 'lucide-react';
import Traction from './Traction';
import Partners from './Partners';

const features = [
  {
    icon: Car,
    title: 'Smart Carpooling',
    description: 'Find reliable rides with fellow students. Save money and reduce your carbon footprint.'
  },
  {
    icon: ShoppingBag,
    title: 'Campus Marketplace',
    description: 'Buy and sell textbooks, electronics, and more within your university community.'
  },
  {
    icon: Users,
    title: 'Student Community',
    description: 'Connect with classmates, join study groups, and build your campus network.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Verified student profiles and secure transactions for peace of mind.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need in <span className="text-[#1877F2]">One App</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-[#1877F2] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Traction />
      <Partners />
    </section>
  );
}