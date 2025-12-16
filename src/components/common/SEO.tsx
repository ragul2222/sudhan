import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ title, description, image, url, type = 'website' }: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | Sudhan Yarns`;

    // Set meta tags
    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:image', content: image || '/og-image.jpg' },
      { property: 'og:url', content: url || window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || '/og-image.jpg' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      let element = document.querySelector(
        `meta[${property ? 'property' : 'name'}="${property || name}"]`
      );

      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else if (name) {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }

      if (content) {
        element.setAttribute('content', content);
      }
    });
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
