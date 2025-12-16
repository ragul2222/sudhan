import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import type { Category } from '../../types';

interface CategoriesSectionProps {
  categories: Category[];
}

// Category images mapping - all yarn/textile related images
const categoryImages: Record<string, string> = {
  'cotton-yarn': 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop&q=80',
  'hosiery-yarn': 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop&q=80',
  'recycled-yarn': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
  'viscose-yarn': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=300&fit=crop&q=80',
};

const defaultCategoryImages = [
  'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=300&fit=crop&q=80',
];

const getCategoryImage = (slug: string, index: number): string => {
  return categoryImages[slug] || defaultCategoryImages[index % defaultCategoryImages.length];
};

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle mx-auto">
            Explore our diverse range of premium knitted fabrics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/products/category/${category.slug}`}
                className="card card-hover group block overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getCategoryImage(category.slug, index)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-display font-bold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs opacity-90">
                      {category.productCount || 0} Products
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
