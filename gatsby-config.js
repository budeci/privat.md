module.exports = {
  siteMetadata: {
    title: 'Privat',
    siteUrl: 'https://app-privat.netlify.com/',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.privat.md/',
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: '',
        // resolveEnv: () => process.env.NODE_ENV,
        // env: {
        //   development: {
        //     policy: [{ userAgent: '*', disallow: ['/'] }],
        //   },
        //   production: {
        //     policy: [{ userAgent: '*', allow: '/' }],
        //   },
        // },
      },
    },
  ],
};
