//core modules

//third party modules
const express = require('express')

// programm
const app = express()
//middlewares
// app.use((req, res, next) => {
//   console.log('in the middleware')
//   next()
// })
const cors = require('cors')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.get('/api', (req, res) => {
  res.json(['radu', 'cristian'])
})
//server.listen(3000)
app.listen(4000, () => {
  console.log('server started on port')
})
