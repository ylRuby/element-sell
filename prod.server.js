// 启动http server
var express = require('express')
var config = require('./config/index')

// 定义运行的port
var port = process.env.PORT || config.build.port

// 启动express
var app = express()
var router = express.Router()

router.get('/', function (req, res, next) {
  req.url = 'index.html'
  next()
})

app.use(router)

// 定义异步接口的router
/* 读取数据 */
var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

/* 定义路由 */
var apiRoutes = express.Router()
/* 接口 */
apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', apiRoutes)

// 定义static目录
app.use(express.static('./dist'))

// 启动express
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
