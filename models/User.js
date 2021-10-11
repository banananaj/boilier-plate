const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // 스페이스바 없앰
        unique: 1
    },
    password:{
        type: String,
        minlength : 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User',userSchema) // 모델이 스키마를 감쌈

module.exports = {User} // 다른데서 쓸 수 있게 export함