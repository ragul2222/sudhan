import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Branches', href: '/branches' },
    { name: 'Contact', href: '/contact' },
  ];

  const productCategories = [
    { name: 'Single Jersey', href: '/products/single-jersey' },
    { name: 'Lycra Fabric', href: '/products/lycra-fabric' },
    { name: 'Loop Knit', href: '/products/loop-knit' },
    { name: 'Rib Knit', href: '/products/rib-knit' },
  ];

  const certifications = [
    'ISO 9001:2015',
    'OEKO-TEX Standard 100',
    'GOTS Certified',
    'BCI Cotton',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SY</span>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-lg">
                  Sudhan Yarns
                </h3>
                <p className="text-sm text-gray-400">Since 1985</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Leading manufacturer of premium quality knitted fabrics, serving the textile industry with excellence for over three decades.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <BuildingOfficeIcon className="w-5 h-5 text-primary-500" />
              <span>40+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-semibold text-sm mb-2">Certifications</h5>
              <ul className="space-y-1">
                {certifications.map((cert) => (
                  <li key={cert} className="text-xs text-gray-400">
                    • {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p>111/2, Pandian Street, Kattur Road,</p>
                  <p>Chennimalai – 638051, Erode Dist,</p>
                  <p>Tamil Nadu, India.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+918012929999"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91 80129 29999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <DevicePhoneMobileIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+919524811655"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91 95248 11655
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PrinterIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>+91 4294 253755</span>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:office@sudhanyarns.com" className="hover:text-primary-400 transition-colors">office@sudhanyarns.com</a>
                  <a href="mailto:cglvikash@gmail.com" className="hover:text-primary-400 transition-colors">cglvikash@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sudhan Yarns. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
