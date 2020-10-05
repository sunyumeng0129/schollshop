let data = require('./src/mock/index.js')
const pxtorem = require('postcss-pxtorem')
module.exports = {
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                res.send(data)
            })
        },
        proxy: 'http://localhost:7001',

    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    }
}