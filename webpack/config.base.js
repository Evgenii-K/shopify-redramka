const { PATH } = require('./CONSTANTS')
const { getEnteries } = require('./GET_ENTERIES')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const enteries = getEnteries()
const entry = {}

enteries.forEach(({ path, name }) => {
  entry[name] = `${path}/${name}.ts`
})

const configBase = {
  entry,
  output: {
    filename: 'js/[name].js',
    path: PATH.dist,
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    concatenateModules: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: '/../node_modules/',
        include: `${PATH.src}`,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(styl|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.html$/,
        include: PATH.components,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new ESLintPlugin(),
    ...enteries.map(({ path, name }) => {
      console.log(path, name)
      return new HTMLWebpackPlugin({
        template: `${path}/${name}.html`,
        filename: `${name}.html`
      })
    }
    )
  ]
}

module.exports = { configBase }
