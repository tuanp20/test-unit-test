module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}],  ["@babel/preset-typescript", {
        "rewriteImportExtensions": true
      }]],
    // '@babel/preset-typescript': {},
  };