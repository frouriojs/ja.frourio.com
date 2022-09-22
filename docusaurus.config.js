module.exports = {
  title: 'frourio',
  tagline: '高速で型安全な TypeScript のためのフレームワーク',
  url: 'https://ja.frourio.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'frouriojs', // Usually your GitHub org/user name.
  projectName: 'ja.frourio.com', // Usually your repo name.
  plugins: ['custom-webpack-config'],
  themeConfig: {
    image: 'img/ogp.png',
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'description',
        content: 'Frourio は TypeScript のためのフルスタックフレームワークです。',
      },
      {
        property: 'og:description',
        content: 'Frourio は TypeScript のためのフルスタックフレームワークです。',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['docker'],
    },
    navbar: {
      title: 'frourio',
      logo: {
        alt: 'frourio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          label: 'Tutorial',
          position: 'right',
        },
        {
          to: 'changelog',
          activeBasePath: 'changelog',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://github.com/frouriojs/frourio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Why frourio?',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation/gui',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/SARkeDf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/solufa2020',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/frouriojs/frourio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frourio, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/ja.frourio.com/edit/master/',
        },
        gtag: {
          trackingID: process.env.TRACKING_ID || 'G-XXXXXX',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/ja.frourio.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
