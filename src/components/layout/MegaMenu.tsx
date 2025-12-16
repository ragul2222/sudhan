import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category, Product } from '../../types';

interface MegaMenuProps {
  categories: Category[];
  featuredProducts: Product[];
  onClose: () => void;
}

const MegaMenu = ({ categories, featuredProducts }: MegaMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="bg-white shadow-2xl border-t border-gray-100"
    >
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Product Categories
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Featured Products
            </h3>
            <div className="space-y-3">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  {product.thumbnail && (
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-1 mt-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      {product.gsmMin && product.gsmMax && (
                        <span className="text-xs text-primary-600">
                          {product.gsmMin}-{product.gsmMax} GSM
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/products"
              className="block text-center mt-4 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
