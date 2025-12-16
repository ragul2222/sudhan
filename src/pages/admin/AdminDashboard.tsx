import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories, getEnquiries, getGalleryItems } from '../../services/api.service';
import type { PaginatedResponse, Product, ApiResponse, Category, Enquiry, GalleryItem } from '../../types';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
    const userData = localStorage.getItem('user') || localStorage.getItem('adminUser');
    
    if (!token || !userData) {
      navigate('/admin/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('user');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const { data: products } = useQuery<PaginatedResponse<Product>>({
    queryKey: ['admin-products'],
    queryFn: () => getProducts(),
  });

  const { data: categories } = useQuery<ApiResponse<Category[]>>({
    queryKey: ['admin-categories'],
    queryFn: () => getCategories(),
  });

  const { data: enquiries } = useQuery<ApiResponse<Enquiry[]>>({
    queryKey: ['admin-enquiries'],
    queryFn: () => getEnquiries(),
  });

  const { data: gallery } = useQuery<ApiResponse<GalleryItem[]>>({
    queryKey: ['admin-gallery'],
    queryFn: () => getGalleryItems(),
  });

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/products', label: 'Products', icon: '📦', count: products?.data?.length },
    { path: '/admin/categories', label: 'Categories', icon: '📁', count: categories?.data?.length },
    { path: '/admin/gallery', label: 'Gallery', icon: '🖼️', count: gallery?.data?.length },
    { path: '/admin/enquiries', label: 'Enquiries', icon: '✉️', count: enquiries?.data?.length },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">Sudhan Yarns</h1>
          <p className="text-sm text-gray-600 mt-1">Admin Panel</p>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-4 py-3 mb-2 rounded-lg transition ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t bg-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">{user.name?.[0]}</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-xs text-gray-600">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route index element={<DashboardHome products={products?.data || []} enquiries={enquiries?.data || []} gallery={gallery?.data || []} categories={categories?.data || []} />} />
          <Route path="dashboard" element={<DashboardHome products={products?.data || []} enquiries={enquiries?.data || []} gallery={gallery?.data || []} categories={categories?.data || []} />} />
          <Route path="products" element={<ProductsManager />} />
          <Route path="categories" element={<CategoriesManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="enquiries" element={<EnquiriesManager />} />
        </Routes>
      </div>
    </div>
  );
};

// Dashboard Home Component
const DashboardHome = ({ products, enquiries, gallery, categories }: any) => {
  const stats = [
    { label: 'Total Products', value: products.length, icon: '📦', color: 'blue' },
    { label: 'Categories', value: categories.length, icon: '📁', color: 'green' },
    { label: 'Gallery Items', value: gallery.length, icon: '🖼️', color: 'purple' },
    { label: 'Enquiries', value: enquiries.length, icon: '✉️', color: 'orange' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</span>
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Recent Enquiries</h2>
        {enquiries.length === 0 ? (
          <p className="text-gray-500">No enquiries yet</p>
        ) : (
          <div className="space-y-3">
            {enquiries.slice(0, 5).map((enquiry: any) => (
              <div key={enquiry.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-semibold">{enquiry.name}</p>
                  <p className="text-sm text-gray-600">{enquiry.email}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {enquiry.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Placeholder managers (to be implemented)
const ProductsManager = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Products Management</h2>
    <p className="text-gray-600">Product CRUD operations coming soon...</p>
  </div>
);

const CategoriesManager = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Categories Management</h2>
    <p className="text-gray-600">Category CRUD operations coming soon...</p>
  </div>
);

const GalleryManager = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Gallery Management</h2>
    <p className="text-gray-600">Gallery CRUD operations coming soon...</p>
  </div>
);

const EnquiriesManager = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Enquiries Management</h2>
    <p className="text-gray-600">Enquiry management coming soon...</p>
  </div>
);

export default AdminDashboard;
