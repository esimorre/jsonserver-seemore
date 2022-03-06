const express = require('express')
var jsonServer = require('json-server');
const path = require('path')


const app = express()

 
app.get('/hello', function (req, res) {
  res.send('Hello World Express!')
})
	
app.use(jsonServer.defaults({static: path.join(__dirname, '/public' )}));
app.use(jsonServer.router(path.join(__dirname, 'db.json')));

app.listen(process.env.PORT, process.env.IP, function () {
  console.log(`Example app started on port ${process.env.PORT}`)
})