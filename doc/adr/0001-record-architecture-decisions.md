# 1. Documentation platform

Date: 2019-05-21

## Status

Approved

## Context

Bits is currently lacking solid documentation. While there are some README.me files alongside each component, they do not fully explain the usage of the component, nor can they demo the component. Ideally, we want our documentation to outline the usage of components, show how to use plain CSS classes for projects not using React, and show interactive examples of the components, along with the code samples that run them. For this, we need to choose a documentation platform beyond some README.md files in GitHub.

### [Docz](https://docz.site)

Docz is an MDX based documentation platform. This means you can use JSX templates inside markdown files and have it render. It comes with a couple useful included components, `Props` and `Playground`. `Props` allows you to pass a reference to your component to it, and have it automatically read the `PropTypes` from the component. You can add `/** a comment */` above the `PropType` to document more than just its name and type. The `Playground` component allows you to add arbitrary JSX as its child, and will render it on the page, along with the option to view and edit the example live.

On paper, Docz seems like the perfect solution, however in my experimenting with it, I'v come across numerous bugs, either stopping Docz from running altogether, or the included component not rendering. Here are some examples of relatively long standing breaking bugs with multiple people affected:

* https://github.com/pedronauck/docz/issues/777
* https://github.com/pedronauck/docz/issues/707
* https://github.com/pedronauck/docz/issues/808
* https://github.com/pedronauck/docz/issues/817

### [Docusaurus](https://docusaurus.io/)

Docusaurus is more mature and is also Markdown based, but lacks the MDX support of Docz. This is, however, coming in Docusaurus 2. As it stands, we would have to manually write our own documentation for props, and settle for code examples. One nice feature Docusaurus has is the ability to provide code examples for different languages and have them as tabs, useful for showing the equivalent HTML/CSS for a React component. The project is maintained by Facebook, and used by many large projects, such as Babel, Gulp, Prettier and a number of React projects.

### [React Styleguidist](https://react-styleguidist.js.org)

This offers a lot of auto-generation of documetation based off code comments and `PropTypes`. It was by far the easiest to bring up, and handles much of the documentation automatically from the code. You can embed JSX code that will render out the given component, and provide a live editor to play around with the component. It also allows for custom markdown files to be added to the page. For items not covered by components, like responsive breakpoints, colours, and fonts.

### [Storybook](https://storybook.js.org/)

Storybooks takes a different approach, using code to document the components. It seems needlessly complicated to write documentation, and furthermore provides a very technical output that doesn't really give much guidance on how to use the components. I'm also unsure how we'd document things like our colour pallete with it.

## Decision

My recommendation is to use React Styleguidist. I've created [a PR](https://github.com/RaspberryPiFoundation/Bits/pull/115) using React Styleguidist, and have continually referred to the deploy preview in my working with Bits since. It works, and seems to be the easiest way to get documentation out of our components.
