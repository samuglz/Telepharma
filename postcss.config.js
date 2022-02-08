// const tailwindcss = require('tailwindcss');
// // const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);
// const postcssClean = require('postcss-clean');

// // const purgecss = postcssPurgecss({
// //    content: ['./public/**/*.html', './src/**/*.vue'],

// //    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

// //    whitelistPatterns: [
// //       /-(leave|enter|appear)(|-(to|from|active))$/,
// //       /^(?!(|.*?:)cursor-move).+-move$/,
// //       /^router-link(|-exact)-active$/
// //    ]
// // });

// module.exports = {
//    plugins: [
//       tailwindcss,
//       postcssClean
//       // ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
//    ]
// };
module.exports = {
   plugins: {
      tailwindcss: {},
      autoprefixer: {}
   }
};
