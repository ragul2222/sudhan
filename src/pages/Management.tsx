import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Management = () => {
  const managingDirector = {
    name: 'Mr. K.C.Chandrasekaran',
    designation: 'Managing Director',
    image: '/images/md.jpg',
    bio: `Mr. K.C.Chandrasekaran, the managing director of Sudhan Group comes with 40 years of rich experience in the textile industry. He started his career in the year 1980 with Jo hand loom machines.

Under his dynamic leadership & hardwork, today Sudhan Group has become one of the largest manufacturers of recycled rotor yarn and one of the leading yarn trading company in India.`
  };

  const boardMembers = [
    { name: 'Mr. A.C.Govindasamy', designation: 'Executive Director' },
    { name: 'Mr. M.Arumugam', designation: 'Chief Financial Officer' },
    { name: 'Mr. K.A.Prem Kumar', designation: 'Director' },
    { name: 'Mr. A.C.Hariharan Sudhan', designation: 'Director' },
    { name: 'Mr. A.G.Manoj Prabakar', designation: 'Director' },
    { name: 'Mr. C.G.L.Vikash Raaj', designation: 'Director' },
  ];

  return (
    <>
      <SEO
        title="Management - Leadership Team"
        description="Meet the experienced leadership team behind Sudhan Yarns' 40 years of textile manufacturing excellence."
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0,_transparent_45%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Leadership
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Guiding Sudhan Group forward
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Strategic direction rooted in experience, discipline, and a partner mindset.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Managing Director */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 p-8 md:p-10 text-center flex flex-col justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-44 h-44 mx-auto mb-6 bg-white/10 backdrop-blur rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
                  >
                    <UserGroupIcon className="w-20 h-20 text-white" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {managingDirector.name}
                  </h2>
                  <div className="inline-block bg-white/15 backdrop-blur px-4 py-2 rounded-full mb-4">
                    <p className="text-primary-100 font-semibold">
                      {managingDirector.designation}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span className="font-medium">40+ Years Experience</span>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Leadership Profile</h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {managingDirector.bio.split('\n\n').map((para, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4 text-gray-700 leading-relaxed text-lg"
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {[{ icon: ShieldCheckIcon, title: 'Governance first', desc: 'Transparent decision making and disciplined controls.' }, { icon: SparklesIcon, title: 'Innovation mindset', desc: 'Encouraging modern processes and capability upgrades.' }].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <item.icon className="w-6 h-6 text-primary-600" />
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
              <span className="text-primary-700 font-semibold text-sm uppercase tracking-[0.15em]">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals guiding our strategic direction.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-lg group-hover:text-primary-700 transition-colors">{member.name}</h3>
                    <p className="text-sm text-primary-600 font-semibold bg-primary-50 inline-block px-3 py-1 rounded-full">{member.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Management;
