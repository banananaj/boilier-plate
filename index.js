const express = require('express')
const app = express()
const port = 3000

const { User } = require("./models/User");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const mongoose = require('mongoose')
const config = require('./config/key');

mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected...')).catch(err => console.log("error"))





 app.get('/', (req, res) => {
  res.send('Hello Worldzzzz!')
})

//client로부터 정보를 받아서 데이터베이스에 넣음
app.post('/register', (req, res) => {
  const user = new User(req.body) // req.body에는 json형식으로 정보가 들어있을거임. bodyParser가 이걸 해줌

  user.save((err, doc) => {
    if(err) return res.json({ success: false, err}) // 실패시 에러메시지와 state를 json형태로 전달해줌
    return res.status(200).json({
      success: true
    })
  })

}) // 엔드포인트 : 레지스터, 콜백함수 : req, res


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})