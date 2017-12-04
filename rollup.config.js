import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import sass from 'rollup-plugin-sass'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/components/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'classnames',
    'react',
    'react-dom',
    'react-router-dom',
    'prop-types',
  ],
  plugins: [
    resolve(),
    commonjs(),
    sass({ insert: true }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
}
