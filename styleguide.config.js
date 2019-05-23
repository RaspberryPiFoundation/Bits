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
          content: 'docs/styles/breakpoints.md',
        },
        {
          name: 'Fonts',
          content: 'docs/styles/fonts.md',
        },
        {
          name: 'Colours',
          content: 'docs/styles/colours.md',
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
