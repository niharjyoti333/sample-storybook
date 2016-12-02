var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')



var app = new (require('express'))()
var port = 6556
var compiler = webpack(config)


app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})
app.get('/1.js',function(req, res){
	console.log('this 1 is hit');
	res.sendFile(__dirname + '/1.js')
})

// app.get('/2.js',function(req, res){
// 	console.log('this 2 is hit');
// 	res.sendFile(__dirname + '/2.js')
// })

// app.get('/3.js',function(req, res){
// 	console.log('this 3 is hit');
// 	res.sendFile(__dirname + '/3.js')
// })

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
