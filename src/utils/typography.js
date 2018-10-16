import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '34px',
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300', '300i', '400', '400i', '600', '600i', '700', '700i'],
    },
    {
      name: 'Rubik',
      styles: ['400', '400i', '500', '500i'],
    },
  ],
});

export default typography;
