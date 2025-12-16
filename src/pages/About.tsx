import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { 
  CheckCircleIcon, 
  TrophyIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const milestones = [
    { year: '1985', title: 'Company Founded', description: 'Started with a vision to deliver premium quality fabrics' },
    { year: '1995', title: 'First Export', description: 'Expanded to international markets across Asia' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001:2000 quality certification' },
    { year: '2010', title: 'Modernization', description: 'Upgraded to state-of-the-art manufacturing technology' },
    { year: '2015', title: 'Sustainability Focus', description: 'Implemented eco-friendly production processes' },
    { year: '2025', title: 'Industry Leader', description: 'Recognized as a leading textile manufacturer' },
  ];

  const values = [
    { 
      icon: ShieldCheckIcon, 
      title: 'Quality First', 
      description: 'Uncompromising quality standards in every fabric we produce' 
    },
    { 
      icon: UserGroupIcon, 
      title: 'Customer Focused', 
      description: 'Building lasting relationships through exceptional service' 
    },
    { 
      icon: SparklesIcon, 
      title: 'Innovation', 
      description: 'Continuously improving processes and product offerings' 
    },
    { 
      icon: GlobeAltIcon, 
      title: 'Sustainability', 
      description: 'Committed to eco-friendly and responsible manufacturing' 
    },
  ];

  const whyChooseUs = [
    { title: '40+ Years', subtitle: 'Industry Experience', icon: TrophyIcon },
    { title: '5000+ MT', subtitle: 'Annual Production', icon: CheckCircleIcon },
    { title: '25+', subtitle: 'Countries Served', icon: GlobeAltIcon },
    { title: '500+', subtitle: 'Happy Clients', icon: UserGroupIcon },
  ];

  const certifications = [
    'ISO 9001:2015',
    'OEKO-TEX Standard 100',
    'GOTS Certified',
    'BCI Member',
  ];

  return (
    <>
      <SEO
        title="About Us - Premium Textile Manufacturer Since 1985"
        description="Discover Sudhan Yarns - A leading textile manufacturer with 40+ years of excellence in premium knitted fabrics. ISO certified, eco-friendly, and trusted by 500+ clients worldwide."
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Crafting Excellence Since 1985
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              A legacy of premium textile manufacturing, trusted by brands worldwide
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Leading the Future of Textile Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Since our inception in 1985, Sudhan Yarns has been committed to delivering premium quality knitted fabrics to the global market. With over four decades of expertise, we've established ourselves as a trusted partner for leading fashion brands and garment manufacturers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our state-of-the-art manufacturing facility in Tirupur, India, combines traditional textile craftsmanship with modern technology to produce fabrics that meet the highest international standards.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in a wide range of knitted fabrics including Single Jersey, Lycra, Loop Knit, Rib Knit, Pique, and French Terry, catering to diverse applications from sportswear to luxury fashion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="Manufacturing Facility"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">40+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Decades of growth, innovation, and excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have set our sights on becoming a textile front runner, providing superior textile solutions starting from specialty yarns to fabrics thereby maximizing value for our client and in turn becoming their preferred partner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that with time, we must constantly evolve as each accomplishment marks a new beginning, an inspiration to focus on the possibilities of tomorrow.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>To excel in our core areas of competence through consistent innovation</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>To strengthen production efficiency through innovation and the use of latest technology</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>To uphold and nurture the core values of transparency, accountability, empowerment and good governance</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>To consistently reduce our environment footprint</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Sudhan Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sudhan Yarns has wide range of products from Fiber, Yarn & Fabrics in all count ranges from 2s to 120s
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{item.title}</div>
                <div className="text-gray-600 font-semibold">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-gray-600">
              Recognized for our commitment to quality and sustainability
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <ShieldCheckIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients worldwide and experience the Sudhan Yarns difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Contact Us
              </a>
              <a href="/products" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
