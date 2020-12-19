const path = require('path');

const pathAliasMap = {
  '@src': path.join(__dirname, './src/'),
  '@core': path.join(__dirname, './src/core/'),
  '@state': path.join(__dirname, './src/core/state/'),
  '@router': path.join(__dirname, './src/core/router/'),
  '@services': path.join(__dirname, './src/core/services/'),
  '@providers': path.join(__dirname, './src/core/providers/'),
  '@shared': path.join(__dirname, './src/shared/'),
  '@components': path.join(__dirname, './src/shared/components/'),
  '@utils': path.join(__dirname, './src/shared/utils/'),
  '@views': path.join(__dirname, './src/views/'),
  '@design': path.join(__dirname, './src/design/'),
  '#factories': path.join(__dirname, './src/shared/factories/'),
  '#services': path.join(__dirname, './src/shared/services/'),
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: pathAliasMap
    }
  }
}