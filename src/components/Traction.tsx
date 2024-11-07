import React from 'react';
import { useEffect, useState } from 'react';

const metrics = [
  { label: 'Active Students', value: 50000, suffix: '+' },
  { label: 'Universities', value: 120, suffix: '+' },
  { label: 'Daily Rides', value: 2500, suffix: '+' },
  { label: 'Items Listed', value: 15000, suffix: '+' }
];

export default function Traction() {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const stepDuration = duration / steps;

    metrics.forEach((metric, index) => {
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round((metric.value * i) / steps);
            return newCounts;
          });
        }, i * stepDuration);
      }
    });
  }, []);

  return (
    <section className="py-20 bg-[#1877F2]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted by Students Across the Nation
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1877F2] mb-2">
                {counts[index].toLocaleString()}{metric.suffix}
              </div>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}