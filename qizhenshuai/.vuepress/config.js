module.exports = {
  base: '/',
  title: '北城博客',
  description: '研发工程师',
	head: [
		['link', { rel: 'icon', href: './favicon.ico' }]
	],
  serviceWorker: true,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
	themeConfig: {
		displayAllHeaders: true,
		activeHeaderLinks: false,
		sidebar: 'auto',
		sidebarDepth: 2,
		lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://qizhenshuai.github.io/blog' },
      { text: '日志', link: '/log/' },
      { text: '关于', link: '/about/' }
    ],
    sidebar: {
      '/log/': [
        ['/log/', '日志']
      ],
      '/about/': [
        ['/about/', '关于']
      ]
    }
  }
}
