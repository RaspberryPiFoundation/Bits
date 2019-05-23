const path = require('path')

module.exports = {
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
  ],
  theme: {
    fontFamily: {
      base: ['Rubik'],
    },
  },
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
}
