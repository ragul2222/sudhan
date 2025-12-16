import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { ShieldCheckIcon, GlobeAltIcon, CheckBadgeIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const certifications = [
    {
      name: 'GRS Certified',
      fullName: 'Global Recycled Standard',
      image: '/images/certifications/grs.png',
      description: 'International standard for recycled content verification and supply chain certification'
    },
    {
      name: 'OEKO-TEX',
      fullName: 'OEKO-TEX Standard 100',
      image: '/images/certifications/oeko-tex.png',
      description: 'World\'s leading label for textiles tested for harmful substances'
    },
  ];

  return (
    <>
      <SEO
        title="Certifications - Quality & Standards"
        description="Sudhan Yarns is certified with international quality and sustainability standards including GRS and OEKO-TEX."
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_30%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Assurance
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Certifications that safeguard your brand.
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Independent standards across safety, sustainability, and supply-chain integrity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to quality, safety, and environmental responsibility across our entire production process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 flex items-center justify-center min-h-[240px]">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ShieldCheckIcon className="w-20 h-20 text-primary-600" />
                  </div>
                </div>
                
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <CheckBadgeIcon className="w-5 h-5" />
                    <span>{cert.fullName}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <GlobeAltIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Quality Commitment</h2>
                </div>
                <div className="flex items-center gap-2 text-primary-600 font-semibold">
                  <DocumentCheckIcon className="w-5 h-5" />
                  <span>Full supply-chain compliance</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    At Sudhan Yarns, quality is not just a goal—it's our foundation. Our certifications represent years of dedication to maintaining the highest standards in textile manufacturing.
                  </p>
                  <p className="mb-4">
                    We continuously invest in modern testing equipment, employee training, and process improvements to ensure every product meets international quality benchmarks.
                  </p>
                  <p>
                    Our certified processes cover everything from raw material selection to final product delivery, giving our customers confidence in every order.
                  </p>
                </div>
                <div className="space-y-4">
                  {[{ title: 'Material traceability', desc: 'Fiber-to-finish visibility with documented checkpoints.' }, { title: 'Lab validation', desc: 'Regular testing for colorfastness, pH, and restricted substances.' }, { title: 'Process controls', desc: 'Standardized SOPs, calibrated equipment, and trained teams.' }].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-primary-50 rounded-xl p-4 border border-primary-100">
                      <CheckBadgeIcon className="w-5 h-5 text-primary-700 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
