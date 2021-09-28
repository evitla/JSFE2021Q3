const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    // contentBase: path.join(__dirname, 'public'),
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [
  new ESLintPlugin({ extensions: ['.ts', '.js'] }),
];

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour1.html',
      filename: 'tour1.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour2.html',
      filename: 'tour2.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour3.html',
      filename: 'tour3.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour4.html',
      filename: 'tour4.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour5.html',
      filename: 'tour5.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour6.html',
      filename: 'tour6.html',
      chunks: [''],
    }),
    new HtmlWebpackPlugin({
      template: './src/tour7.html',
      filename: 'tour7.html',
      chunks: [''],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: './public',
    //     }
    //   ],
    // }),
    new CleanWebpackPlugin(
      { cleanStaleWebpackAssets: false },
    ),
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      encoding: 'utf-8',
      extensions: [ '.ts', '.js', '.css', '.sass', '.scss' ]
    }),
    ...esLintPlugin(develop),
  ],
  ...devServer(develop),
  optimization: {
    minimize: false,
  },
});