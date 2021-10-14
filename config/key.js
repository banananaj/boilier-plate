if(process.env.NODE_ENV === 'production' ){
    module.exports = require('./prod');
} else {
module.exports = require('./dev');
} // 환경변수에 따라 Dev모드와 Production 모드 구분. 