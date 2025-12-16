import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import ProductCard from '../components/products/ProductCard';
import { getProductBySlug } from '../services/api.service';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop&q=80';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug as string),
    enabled: !!slug,
  });

  const product = data?.data;
  const relatedProducts = product?.relatedProducts ?? [];

  const categoryName = useMemo(() => {
    if (!product?.category) return undefined;
    if (typeof product.category === 'string') return product.category;
    return (product as any).category?.name;
  }, [product]);

  const galleryImages = useMemo(() => {
    if (!product) return [PLACEHOLDER_IMG];

    const imgs: string[] = [];
    if (product.thumbnail) imgs.push(product.thumbnail);
    const imgArr = (product as any).images;
    if (Array.isArray(imgArr)) {
      imgArr.forEach((img: any) => {
        if (img?.imageUrl) imgs.push(img.imageUrl);
        else if (typeof img === 'string') imgs.push(img);
      });
    }
    if (!imgs.length) imgs.push(PLACEHOLDER_IMG);
    return imgs;
  }, [product]);

  const [activeImage, setActiveImage] = useState<string>(galleryImages[0]);

  useEffect(() => {
    setActiveImage(galleryImages[0]);
  }, [galleryImages]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Unable to load product</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  return (
    <>
      <SEO
        title={product.name}
        description={product.shortDescription || product.description}
        image={product.thumbnail || galleryImages[0]}
      />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          {/* Top layout */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop&q=80';
                  }}
                />
              </div>
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-3">
                {galleryImages.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-lg overflow-hidden border transition ${
                      activeImage === img ? 'border-primary-500 ring-2 ring-primary-100' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                {product.featured && (
                  <span className="px-3 py-1 text-xs font-semibold bg-primary-50 text-primary-700 rounded-full">
                    Featured
                  </span>
                )}
                {categoryName && (
                  <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">
                    {categoryName}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">{product.name}</h1>
              {product.shortDescription && (
                <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {product.gsmMin !== undefined && product.gsmMax !== undefined && (
                  <SpecPill label="GSM" value={`${product.gsmMin}-${product.gsmMax}`} />
                )}
                {product.width && <SpecPill label="Width" value={product.width} />}
                {product.material && <SpecPill label="Material" value={product.material} />}
                {product.moq && <SpecPill label="MOQ" value={product.moq} />}
              </div>

              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Available Colors</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <span key={color} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="text-xs px-3 py-1 rounded-full bg-primary-50 text-primary-700">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL || 'info@sudhanyarns.com'}?subject=Enquiry - ${encodeURIComponent(product.name)}`}
                  className="btn-primary text-center"
                >
                  Get Quote
                </a>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999'}?text=${encodeURIComponent('Hello, I am interested in ' + product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Product Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description || 'Reach out to us for complete product details.'}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Specifications</h3>
              <ul className="space-y-3">
                {product.specifications?.map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{spec.label}</p>
                      <p className="text-sm text-gray-600">{spec.value}</p>
                    </div>
                  </li>
                ))}
                {!product.specifications?.length && (
                  <li className="text-sm text-gray-600">Reach out to get full technical specs.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">You may also like</h3>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  Explore more <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p: any, idx: number) => (
                  <ProductCard key={p.id} product={{ ...p, thumbnail: p.images?.[0]?.imageUrl || p.thumbnail }} index={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const SpecPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-100 bg-gray-50">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-semibold text-gray-900">{value}</span>
  </div>
);

export default ProductDetail;
