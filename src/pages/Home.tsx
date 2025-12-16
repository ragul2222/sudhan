import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { getCategories, getFeaturedProducts, getTestimonials } from '../services/api.service';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CertificationsSection from '../components/home/CertificationsSection';

const Home = () => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: featuredProducts } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
  });

  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  });

  return (
    <>
      <SEO
        title="Home - Premium Textile Manufacturers"
        description="Sudhan Yarns is a leading manufacturer of premium quality knitted fabrics since 1985. We offer a wide range of textile products including Lycra, Single Jersey, Loop Knit, and more."
        image="/hero-image.jpg"
      />

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      
      {categories && (
        <CategoriesSection categories={categories.data} />
      )}
      
      {featuredProducts && (
        <FeaturedProducts products={featuredProducts.data} />
      )}
      
      {testimonials && (
        <TestimonialsSection testimonials={testimonials.data} />
      )}
      
      <CertificationsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your textile requirements and get a competitive quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Get a Quote
              </Link>
              <Link
                to="/products"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
