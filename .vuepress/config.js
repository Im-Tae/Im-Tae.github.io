module.exports = {
    title: 'Im-Tae',
    description: 'Im-Tae.github.io',
    themeConfig: {
      search: false, activeHeaderLinks: false,
      logo: 'https://Im-Tae.github.io/images/Im-Tae.png',
      nav: [
        { text: 'Github', link: 'https://github.com/Im-Tae', target:'_blank'  },
        { text: 'Tistory', link: 'https://imleaf.tistory.com/', target:'_blank' },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/limtaegeon/', target:'_blank' }
      ],
      sidebar: [
        '/',
        '/page-a',
        ['/page-b', 'Explicit link text']
      ]
    }, 
    plugins: [
      '@vuepress/back-to-top',
      '@vuepress/active-header-links',
      '@vuepress/medium-zoom',
      '@vuepress/nprogress',
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }]
    ]
  
  }