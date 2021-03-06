const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;




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

userSchema.pre('save', function( next ){
    //비밀번호 암호화
    var user = this;
    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
            })
        })
    }
    next()
}) // user.save가 있기 전에 function을 하고 save를 하겠음.
const User = mongoose.model('User',userSchema) // 모델이 스키마를 감쌈

module.exports = {User} // 다른데서 쓸 수 있게 export함