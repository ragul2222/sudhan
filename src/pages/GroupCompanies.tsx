import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { BuildingOfficeIcon, CogIcon, SparklesIcon, ArrowPathIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline';

const GroupCompanies = () => {
  const companies = [
    {
      name: 'SUDHAN YARNS/ STAR YARN/ LOTUS AGENCY',
      icon: BuildingOfficeIcon,
      color: 'from-blue-500 to-blue-600',
      description: `Sudhan Yarns is one of the leading yarn trading company in India with head office in Chennamalai and branch offices in Erode, Karur, Tirupur and Somanur. It caters into all types of yarns and fabrics count ranging from 2s to 120s. We are associated with 50 leading and prestigious textile groups in India that includes Srilanmugaivel group, Pallava group, Precot meridian, Super group etc.`,
      details: 'By winning the heart of customers we are now able to sell 200 tons per day of yarn in both domestic and export markets.'
    },
    {
      name: 'C P COTTON',
      icon: SparklesIcon,
      color: 'from-green-500 to-green-600',
      description: 'It caters in conversion of pre consumer and post consumer fabric waste into recycled fiber which is used mainly in open end spinning as raw material. With the capacity of 12 machines it produces 30 tons per day of recycled fiber.'
    },
    {
      name: 'SRI LAKSHIMI GANESH SPINNING MILL OE DIVISION',
      icon: CogIcon,
      color: 'from-purple-500 to-purple-600',
      description: 'The OE (Open End) division has 10000 rotors in two units with production capacity of 35 tons per day, count ranging from 2s to 40s in cotton, recycled and blended yarn with international standards and customer satisfaction. All yarns produced here are GRS CERTIFIED.'
    },
    {
      name: 'GREEN FINE TEXTILE / RED FINE TEXTILE',
      icon: ArrowPathIcon,
      color: 'from-orange-500 to-orange-600',
      description: 'Green fine textile is a weaving division which forays into woven fabric production for apparel and home textiles starting from count 2s to 100s in plain weave, twills, drills, doubles and satin made with single ply, twisted and specialised yarns, with production capacity of 100000 meters per day from 1200 shuttle looms and 150 shuttleless looms of airjet and projectile, manufactured in both in-house and outsourced units'
    },
  ];

  return (
    <>
      <SEO
        title="Group Companies - Sudhan Group"
        description="Discover the diverse business verticals of Sudhan Group, from yarn trading to spinning mills and textile manufacturing."
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.1),transparent_30%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Integrated companies, one promise.
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Yarn trading, spinning, recycling, and weaving connected by disciplined execution.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Companies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${company.color} p-6 md:p-8`}> 
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                          <company.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                          {company.name}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <ShieldCheckIcon className="w-5 h-5" />
                        <span>Operational excellence</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {company.description}
                    </p>
                    {company.details && (
                      <div className="bg-primary-50 border border-primary-100 p-4 rounded-xl flex items-start gap-3">
                        <BoltIcon className="w-5 h-5 text-primary-600 mt-0.5" />
                        <p className="text-gray-700 font-medium">{company.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Scale and capability</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Numbers that back our promise</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Trading Capacity', value: '200 Tons/Day' },
              { label: 'Recycled Fiber', value: '30 Tons/Day' },
              { label: 'OE Rotors', value: '10,000+' },
              { label: 'Weaving Looms', value: '1,350+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center border border-primary-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary-700 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupCompanies;
