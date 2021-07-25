const path = require('path')

module.exports = function override(config, env) {
    config.devServer = {
        ...(config.devServer || {}),
        hot: false,
        inline: false,
        liveReload: false
    }

    // config.mode = 'development'
    config.resolve.symlinks = false
    config.resolve.alias = {
        react: path.resolve('./node_modules/react'),
        'styled-components': path.resolve('./node_modules/styled-components'),
        'react-router-dom': path.resolve('./node_modules/react-router-dom'),
        'ts-loader': path.resolve('./node_modules/react-')
    }

    for (const rule1 of config.module.rules) {
        if (rule1.oneOf) {
            for (const rule2 of rule1.oneOf) {
                if (rule2.test && rule2.test.toString().indexOf('tsx') !== -1) {
                    rule2.include = [rule2.include, path.resolve('node_modules/@arcanefinance/uikit')]
                    console.log(rule2.include)
                
                }
            }
        }
    }

    // config.module.rules.push({
    //     test: /\.(ts|tsx)?$/,
    //     include: path.resolve(__dirname, 'node_modules/@arcanefinance/uikit'),
    //     use: [
    //         {
    //             loader: 'ts-loader'
    //         }
    //     ]
    // })

    return config;
}