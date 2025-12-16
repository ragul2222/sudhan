import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-textile-beige">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230284c7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="badge bg-primary-100 text-primary-700 px-4 py-2 text-sm font-semibold">
                Since 1985 • Premium Quality
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              Premium Textile
              <span className="text-primary-600"> Manufacturing</span>
              <br />
              Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Leading manufacturer of high-quality knitted fabrics for garment industry. 
              Trusted by brands worldwide for over 40 years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/products"
                className="btn-primary group inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>Explore Products</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline text-lg"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>OEKO-TEX Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Export Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Image - shown only on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:hidden mb-8 order-first"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=1400&h=1000&fit=crop&q=85&auto=format"
                alt="Premium cotton yarn cones"
                className="rounded-2xl shadow-xl object-cover w-full h-[250px] sm:h-[300px]"
              />
              {/* Mobile Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2">
                  <p className="text-xl font-bold text-primary-600">40+</p>
                  <p className="text-xs text-gray-600">Years</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2">
                  <p className="text-xl font-bold text-primary-600">500+</p>
                  <p className="text-xs text-gray-600">Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Image - hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=2000&h=1400&fit=crop&q=85&auto=format"
                alt="Premium cotton yarn cones"
                className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">40+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-textile-sand rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
