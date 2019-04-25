// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017/app');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String,
    onName : String,
    function : String
}, { collection: 'test'});

const commentSchema = mongoose.Schema({
	uid : String,
	comment : String
}, { collection: 'comment' });

 const location = mongoose.Schema({
 	locationName: String,
 	des: String,
 	src: String,
 	nearby: Array
 }, { collection: 'location' })
/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    Comment : mongoose.model('Comment',commentSchema),
    Location : mongoose.model('Location', location)
}

module.exports = Models;
