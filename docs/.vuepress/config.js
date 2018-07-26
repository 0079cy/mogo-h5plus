module.exports = {
  title: "MogoH5+",
  description: "快速开发WebApp的多页面脚手架工具",
  base: "/mogo-h5plus/",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "MogoH5+文档", link: "/guide.md" },
      { text: "H5+文档", link: "http://www.html5plus.org/doc/h5p.html" }
    ],
    repo: "tyaqing/mogo-h5plus",
    search: true,
    sidebar: [
      {
        title: "指南",
        collapsable: false,
        children: [
          "introduction" /* / */,
          "contact" /* /contact.html */,
          "about" /* /about.html */
        ]
      },
      {
        title: "热点",
        children: [
          /* ... */
        ]
      }
    ]
  }
};
