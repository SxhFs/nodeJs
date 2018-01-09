var EventEmitter = require('events');
var util = require('util');
var events = new EventEmitter;
//给对象events注册click事件
//当click事件发生的时候执行对应的回调函数
// events.addListener('click',function(){
//     console.log('click');
// });
// //发射click事件
// events.emit('click');

/*************************** */
function Girl(){

}
util.inherits(Girl,EventEmitter);
var girl = new Girl();
function callback(){
    console.log('我要吃饭');
}
//绑定事件
girl.on('hungry',callback);
//移除事件
girl.removeListener('hungry',callback);
girl.on('sad',function(things,things2){
    console.log('shopping:'+things+things2);
});
girl.emit('hungry');
girl.emit('sad','包包','1');