let Mock = require('mockjs')
let data = Mock.mock({
    'list|6': [{
        'id': '@id',
        'tit': '@ctitle(4)',
        'price|10-50': 10,
        'num': 0,
        'checked': false
    }]
})
module.exports = { data: data.list }