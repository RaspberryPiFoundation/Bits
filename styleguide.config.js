const path = require('path')

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/components/index.js',
  ],
  require: [path.join(__dirname, 'src/styles/main.scss')],
  sections: [
    {
      name: 'Styles',
      sections: [
        {
          name: 'Responsive Breakpoints',
          content: 'doc/styles/breakpoints.md',
        },
        {
          name: 'Responsive Embeds',
          content: 'doc/styles/embeds.md',
        },
        {
          name: 'Fonts',
          content: 'doc/styles/fonts.md',
        },
        {
          name: 'Colours',
          content: 'doc/styles/colours.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/*.js',
    },
    {
      name: 'Changelog',
      content: 'CHANGELOG.md',
    },
  ],
  template: {
    head: {
      raw:
        '<style>* { font-family: Rubik, sans-serif !important } code { font-family: "Space Mono", monospace !important }</style>',
      links: [
        {
          href:
            'https://fonts.googleapis.com/css?family=Rubik|Space+Mono&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: ['Rubik'],
    },
  },
}
