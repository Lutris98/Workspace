const express = require('express')  //모듈가져오기
const app = express()
const port = 5000  

const mongoose = require('mongoose')  //mongodb연결
mongoose.connect('mongodb+srv://98johnyou:johnyou98@boilerplate.hwkyi15.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})