import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const CertificationsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'OEKO-TEX Standard 100', description: 'Product Safety' },
    { name: 'GOTS Certified', description: 'Organic Textiles' },
    { name: 'BCI Cotton', description: 'Better Cotton Initiative' },
  ];

  return (
    <section ref={ref} className="py-16 bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
            Certifications & Compliance
          </h2>
          <p className="text-gray-600">
            Meeting international quality and safety standards
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckBadgeIcon className="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-600">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
