const links = require('./links')

module.exports = {
  lang: 'zh-CN', // en zh-CN
  logo: '/20201002/author.jpg',
  // banner: '/20171231/YgorwbJUDpcQHV5h.png',
  author: 'qizhenshuai',
  authorLink: 'https://github.com/qizhenshuai/',
  avatar: '/20201002/author.jpg',
  social: {
    github: 'https://github.com/qizhenshuai/',
    facebook: '',
    twitter: 'https://twitter.com/qizhenshuai',
    dribbble: 'https://dribbble.com/qizhenshuai',
    weibo: 'https://weibo.com/gu642779596',
    zhihu: 'https://www.zhihu.com/people/ethan-39-61',
    qq: 'tencent://message/?uin=5159577',
  },
  locales: {
    title: '星汉灿烂',
    description: '书写生活与你',
  },
  navs: [
    {
      text: '博客',
      link: '/blog/',
      type: '_blank'
    },
    {
      text: '生活兴趣',
      link: '/life/',
    },
    {
      text: '软件工具',
      link: '/tool/',
    },
    {
      text: '其它',
      link: '/other/',
    },
  ],
  nameplate: {
    title: '陶北',
  },
  buttons: [
    {
      text: '阅读列表',
      link: '/posts/',
      type: 'primary',
    },
    {
      text: '了解作者',
      link: '/about.html',
      type: 'default',
    },
  ],
  footer: {
    one: [
      {
        title: 'Yur',
        subtitle: 'VuePress 主题',
        link: 'https://github.com/cnguu/vuepress-theme-yur',
      },
    ],
    two: [
      {
        title: '本站托管于 GitHub',
        link: 'https://blog.cnguu.cn/',
        type: 'cloud',
        theme: 'filled',
      },
      {
        title: '粤 ICP 备 17075980 号 - 4',
        link: 'http://beian.miit.gov.cn',
        type: 'flag',
        theme: 'filled',
      },
    ],
    three: [
      {
        title: '吐个槽',
        link: 'https://support.qq.com/product/5159577',
        type: 'message',
        theme: 'outlined',
      },
    ],
  },
  // ityped: {
  //   typeSpeed: 300,           // 正常速度
  //   backSpeed: 100,           // 反向速度
  //   startDelay: 300,          // 开始延迟（毫秒）
  //   backDelay: 1300,          // 反向延迟（毫秒）
  //   loop: true,               // 循环
  //   showCursor: true,         // 显示指针
  //   placeholder: false,       // 占位
  //   disableBackTyping: false, // 禁用反向输入
  //   cursorChar: '丨',         // 指针字符
  // },
  post: {
    bubbles: true,
    // cover: [
    //   '/20171231/favicon.ico',
    //   'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
    // ],
    // pageSize: 12,
    // pageSizeOptions: ['12', '24', '48', '96'],
  },
  reward: [
    'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
    'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png',
  ],
  timeline: true,
  links,
  about: true,
  // discuss: 'vssue',
  // valine: {
  //   appId: '',
  //   appKey: '',
  //   placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
  //   notify: false,
  //   verify: true,
  //   avatar: 'mp',
  //   pageSize: 8,
  //   recordIP: true,
  //   lang: 'zh-cn',
  // },
  search: {
    type: 'default',
    size: 10,
  },
  // crisp: '',
  // tagSize: 100,
  // baiDu: {
  //   tongJi: '',
  //   autoPush: true,
  //   pinYin: true,
  // },
  // curtain: {
  //   tip: '页面准备中...',
  //   textShadow: '#e91e63',
  // },
  dark: true,
  // cdn: 'https://cdn.jsdelivr.net/gh/cnguu/cnguu.github.io@master/',
}
