const webpack = require('webpack')

module.exports = {
    // devtool: 'cheap-module-eval-source-map'
    // webpack5
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                devtools: 'cheap-module-eval-source-map'
            }
        })
    ]
}
