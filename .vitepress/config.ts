import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

const customTags = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "学习笔记",
  description: "赵某人的学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/maths/symbol.md' }
    ],

    sidebar: [
      // {
      //   text: '例子',
      //   items: [
      //     { text: 'api', link: '/api-examples.md' },
      //     { text: 'markdown', link: '/markdown-examples.md' }
      //   ]
      // }, 
      {
        text: '数学',
        items: [
          { text: '符号', link: '/maths/symbol.md' },
          { text: '三角函数', link: '/maths/trigonometric.md' },
          { text: '极限', link: '/maths/limit.md' },
          { text: '导数', link: '/maths/derivative.md' },
          { text: '不定积分', link: '/maths/indefinite_integral.md' },
          { text: '定积分', link: '/maths/definite_integral.md' },
          { text: '重积分', link: '/maths/multiple_integral.md' },
          { text: '微分方程', link: '/maths/equations.md' },
          { text: '多元函数', link: '/maths/multivariate_function.md' },
          { text: '中值定理', link: '/maths/mean_value_theorem.md' },
          { text: '行列式', link: '/maths/determinant.md' },
          { text: '矩阵', link: '/maths/matrix.md' },
        ]
      }, 
      {
        text: '数据结构',
        items: [
          { text: '基本概念和术语', link: '/dataStructures/basicConcepts.md' },
          { text: '线性表', link: '/dataStructures/list.md' },
          { text: '排序', link: '/dataStructures/sorts.md' },
          { text: '树', link: '/dataStructures/tree.md' }
        ]
      }, 
      {
        text: '政治',
        items: []
      }, 
      {
        text: '英语',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItMathjax3)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customTags.includes(tag)
      }
    }
  },
  base: '/notes/'
})
