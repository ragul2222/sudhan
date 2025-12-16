import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <Link to={`/products/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100">
              <span className="text-4xl font-bold text-primary-300">
                {product.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {product.featured && (
            <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
          {product.shortDescription && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>
          )}

          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.gsmMin && product.gsmMax && (
              <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                {product.gsmMin}-{product.gsmMax} GSM
              </span>
            )}
            {product.material && (
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                {product.material}
              </span>
            )}
          </div>

          {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-gray-500">Colors:</span>
                <div className="flex gap-1">
                  {product.colors.slice(0, 4).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-xs text-gray-500 ml-1">
                      +{product.colors.length - 4}
                    </span>
                  )}
                </div>
              </div>
            )}

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-primary-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              View Details
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
