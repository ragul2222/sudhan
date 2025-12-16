import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getFeaturedProducts } from '../../services/api.service';
import MegaMenu from './MegaMenu';
import SearchBar from './SearchBar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: featuredProducts } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Profile', 
      href: '/about',
      hasDropdown: true,
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Management', href: '/management' },
        { name: 'Group Companies', href: '/group-companies' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'CSR Activities', href: '/csr-activities' },
      ]
    },
    { name: 'Products', href: '/products', hasMegaMenu: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Branches', href: '/branches' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 shadow-lg border-slate-200/80 py-2'
            : 'bg-white/80 backdrop-blur-xl shadow-sm border-white/70 py-3'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-md"
              >
                <span className="text-white font-bold text-xl">SY</span>
              </motion.div>
              <div className="hidden md:block">
                <h1 className={`font-display font-bold text-gray-900 transition-all ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>
                  Sudhan Yarns
                </h1>
                <p className="text-xs text-gray-600">Premium Textile Manufacturers</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                if (item.hasMegaMenu) {
                  return (
                    <div
                      key={item.name}
                      className="relative flex items-center"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-1 text-sm font-semibold rounded-full px-3 py-2 transition-all ${
                          location.pathname.startsWith(item.href)
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/60'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`} />
                      </Link>
                    </div>
                  );
                }
                
                if (item.hasDropdown && item.items) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`flex items-center space-x-1 text-sm font-semibold rounded-full px-3 py-2 transition-all ${
                          item.items.some(sub => location.pathname === sub.href)
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/60'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 pt-2 z-50">
                          <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  location.pathname === subItem.href
                                    ? 'text-primary-700 bg-primary-50 font-semibold'
                                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-semibold rounded-full px-3 py-2 transition-all ${
                      location.pathname === item.href
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </motion.button>

              <Link
                to="/contact"
                className="hidden md:block text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md hover:shadow-lg transition-shadow"
              >
                Get Quote
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu - Outside header for proper positioning */}
      <AnimatePresence>
        {isMegaMenuOpen && categories?.data && featuredProducts?.data && (
          <div
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="fixed left-0 right-0 z-40"
            style={{ top: isScrolled ? '64px' : '80px' }}
          >
            <MegaMenu
              categories={categories.data}
              featuredProducts={featuredProducts.data}
              onClose={() => setIsMegaMenuOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Search Bar Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl border-l border-slate-100 z-50 lg:hidden"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-display font-bold tracking-tight">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-1 flex-1 overflow-y-auto pb-4">
                  {navigation.map((item) => {
                    if (item.hasDropdown && item.items) {
                      return (
                        <div key={item.name} className="space-y-1 py-2 border-b border-gray-100">
                          <div className="px-3 py-2 text-xs font-bold text-primary-600 uppercase tracking-wider">
                            {item.name}
                          </div>
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`block px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                location.pathname === subItem.href
                                  ? 'text-primary-700 bg-primary-50'
                                  : 'text-gray-700 hover:bg-slate-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    
                    if (item.hasMegaMenu) {
                      return null; // Skip mega menu items in mobile
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-3 py-3 text-base font-semibold rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-gray-800 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <Link
                    to="/contact"
                    className="block text-center mt-8 px-4 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Get Quote
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  );
};

export default Header;
