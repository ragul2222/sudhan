import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SparklesIcon,
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: SparklesIcon,
      title: 'Premium Quality',
      description: 'Finest yarns and state-of-the-art manufacturing ensure superior fabric quality.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Certified & Compliant',
      description: 'ISO 9001:2015, OEKO-TEX, and GOTS certified for international standards.',
    },
    {
      icon: TruckIcon,
      title: 'Timely Delivery',
      description: 'Efficient logistics and supply chain management for on-time deliveries.',
    },
    {
      icon: ClockIcon,
      title: '40+ Years Experience',
      description: 'Four decades of expertise in textile manufacturing and export.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Sudhan Yarns</h2>
          <p className="section-subtitle mx-auto">
            Your trusted partner for premium quality textile solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="card card-hover p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
