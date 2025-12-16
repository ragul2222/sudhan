import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { SunIcon, BoltIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const CSRActivities = () => {
  const initiatives = [
    {
      title: 'Wind Energy',
      icon: SunIcon,
      color: 'from-green-500 to-green-600',
      description: 'KC wind energy is a wind energy division which produces wind power from 2MW wind mill which are located in Palladam and Tirunelveli. All power produced are utilised in in-house manufacturing units of the group.',
      image: '/images/csr/windmill.jpg'
    },
  ];

  return (
    <>
      <SEO
        title="CSR Activities - Corporate Social Responsibility"
        description="Sudhan Yarns' commitment to renewable energy and sustainable manufacturing practices."
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_30%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Responsibility
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Powered by renewable intent.
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              Clean energy investments that directly power our manufacturing footprint.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Initiative */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden shadow-2xl border border-green-100">
                <div className={`bg-gradient-to-r ${initiative.color} p-8 md:p-12`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <initiative.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {initiative.title}
                        </h2>
                        <p className="text-green-50">KC Wind Energy Division</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/85 text-sm">
                      <ShieldCheckIcon className="w-5 h-5" />
                      <span>GRS-aligned renewable sourcing</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {initiative.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <BoltIcon className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">2MW Capacity</div>
                            <div className="text-sm text-gray-600">Wind power generation</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <HeartIcon className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">100% In-house Usage</div>
                            <div className="text-sm text-gray-600">Powering our manufacturing units</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                        <img
                          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop"
                          alt="Wind Energy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Environmental impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our renewable mix reduces grid reliance, supports circularity, and strengthens responsible production.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Clean Energy', value: '2MW', desc: 'Wind power capacity' },
              { label: 'Locations', value: '2', desc: 'Palladam & Tirunelveli' },
              { label: 'Self Powered', value: '100%', desc: 'In-house utilization' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100"
              >
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 text-center border border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our sustainability commitment
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond renewable energy, we continuously work towards reducing our environmental footprint through water conservation, waste management, and eco-friendly production practices. Our goal is to be a leader in sustainable textile manufacturing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CSRActivities;
