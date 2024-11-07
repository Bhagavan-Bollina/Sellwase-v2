import React, { useEffect, useRef } from 'react';
import { Building2, GraduationCap } from 'lucide-react';

const universities = [
  'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley',
  'Yale University', 'Princeton University', 'Columbia University', 'UCLA',
  'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley' // Repeated for continuous scroll
];

const inventoryPartners = [
  'Campus Bookstore Co.', 'TechHub Electronics', 'Student Essentials', 'EcoMobile Transport',
  'Academic Publishers', 'Campus Gear', 'Smart Solutions', 'UniLife Supplies',
  'Campus Bookstore Co.', 'TechHub Electronics', 'Student Essentials', 'EcoMobile Transport' // Repeated for continuous scroll
];

export default function Partners() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    
    if (scroll1 && scroll2) {
      scroll1.scrollLeft = 0;
      scroll2.scrollLeft = scroll2.scrollWidth;
      
      const animate = () => {
        if (scroll1.scrollLeft >= scroll1.scrollWidth / 2) {
          scroll1.scrollLeft = 0;
        } else {
          scroll1.scrollLeft += 1;
        }
        
        if (scroll2.scrollLeft <= 0) {
          scroll2.scrollLeft = scroll2.scrollWidth / 2;
        } else {
          scroll2.scrollLeft -= 1;
        }
      };

      const animation = setInterval(animate, 30);
      return () => clearInterval(animation);
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Growing Network
        </h2>
        
        <div className="space-y-16">
          {/* Universities - Scrolling Left */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-[#1877F2]" />
              <h3 className="text-2xl font-semibold">Partner Universities</h3>
            </div>
            <div 
              ref={scrollRef1}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="inline-flex gap-6 py-4">
                {universities.map((uni, index) => (
                  <div
                    key={index}
                    className="inline-block p-4 rounded-xl border border-gray-200 hover:border-[#1877F2] hover:shadow-lg transition-all min-w-[250px]"
                  >
                    <p className="font-semibold text-gray-800 text-center">{uni}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Students Section */}
          <div className="py-16 bg-[#1877F2]/5 rounded-3xl">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Join Thousands of Students
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Experience seamless campus life with our all-in-one platform. Connect, share rides, and trade with your university community.
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      alt="Students using app" 
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                      <div className="text-[#1877F2] font-bold text-xl">4.9★</div>
                      <div className="text-sm text-gray-600">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Partners - Scrolling Right */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-[#1877F2]" />
              <h3 className="text-2xl font-semibold">Inventory Partners</h3>
            </div>
            <div 
              ref={scrollRef2}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="inline-flex gap-6 py-4">
                {inventoryPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="inline-block p-4 rounded-xl border border-gray-200 hover:border-[#1877F2] hover:shadow-lg transition-all min-w-[250px]"
                  >
                    <p className="font-semibold text-gray-800 text-center">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}