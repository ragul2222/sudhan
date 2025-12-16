import { useQuery } from '@tanstack/react-query';
import SEO from '../components/common/SEO';
import { getGalleryItems } from '../services/api.service';

const Gallery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getGalleryItems(),
  });

  return (
    <>
      <SEO
        title="Gallery"
        description="View our manufacturing facilities, quality control processes, and product showcase."
      />
      <div className="min-h-screen py-20">
        <div className="container-custom">
          <h1 className="section-title text-center mb-12">Gallery</h1>
          
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.data.map((item) => (
                <div key={item.id} className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
