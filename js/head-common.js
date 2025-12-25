// js/head-common.js

// Add Favicon
(function() {
  const favicons = [
    { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href:  '/images/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href:  '/images/favicon/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes:  '180x180', href: '/images/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href:  '/images/favicon/site.webmanifest' }
  ];

  favicons.forEach(function(favicon) {
    const link = document.createElement('link');
    Object.keys(favicon).forEach(function(key) {
      link.setAttribute(key, favicon[key]);
    });
    document.head.appendChild(link);
  });

  // Theme color（Light mode）
  const themeColorLight = document. createElement('meta');
  themeColorLight.setAttribute('name', 'theme-color');
  themeColorLight.setAttribute('content', '#443088');
  themeColorLight.setAttribute('media', '(prefers-color-scheme: light)');
  document.head.appendChild(themeColorLight);

  // Theme color（Dark mode）
  const themeColorDark = document.createElement('meta');
  themeColorDark.setAttribute('name', 'theme-color');
  themeColorDark.setAttribute('content', '#443088');
  themeColorDark.setAttribute('media', '(prefers-color-scheme: dark)');
  document.head.appendChild(themeColorDark);
})();