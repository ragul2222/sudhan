import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState({ years: 0, capacity: 0, clients: 0, warehouses: 0 });

  const stats = [
    { label: 'Years of Experience', value: 40, suffix: '+', key: 'years' },
    { label: 'Monthly Capacity (MT)', value: 500, suffix: '', key: 'capacity' },
    { label: 'Happy Clients', value: 500, suffix: '+', key: 'clients' },
    { label: 'Warehouses', value: 2, suffix: '', key: 'warehouses' },
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
