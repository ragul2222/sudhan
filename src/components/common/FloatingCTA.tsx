import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  PhoneIcon, 
  EnvelopeIcon,
  XMarkIcon 
} from '@heroicons/react/24/solid';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+919876543210';
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+91 421 1234567';
  const email = import.meta.env.VITE_EMAIL || 'info@sudhanyarns.com';

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to know more about your products.');
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}?subject=Product Inquiry`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Email Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    onClick={handleEmail}
                    className="group flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    aria-label="Send Email"
                  >
                    <span className="text-sm font-semibold hidden sm:block">Email Us</span>
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <EnvelopeIcon className="w-5 h-5" />
                    </div>
                  </motion.button>

                  {/* Call Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    onClick={handleCall}
                    className="group flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    aria-label="Call Us"
                  >
                    <span className="text-sm font-semibold hidden sm:block">Call Now</span>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                  </motion.button>

                  {/* WhatsApp Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                    onClick={handleWhatsApp}
                    className="group flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    aria-label="WhatsApp"
                  >
                    <span className="text-sm font-semibold hidden sm:block">WhatsApp</span>
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all ${
                isOpen ? 'bg-red-500' : 'bg-primary-600'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open contact menu'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Backdrop for mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
