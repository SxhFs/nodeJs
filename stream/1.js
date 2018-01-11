var fs = require('fs');

// var rs = fs.createReadStream('./1.txt',{
//     flags:'r',//表示打开文件之后想干什么,默认为r = read
//     encoding:null,//得到的数据是BUffer对象，如果是指定编码，那么事字符串类型的
//     start:4,//读取的字节索引的开始位置
//     end:6,//读入的字节的索引的结束位置
//     highWaterMark:1
// });
var rs = fs.createReadStream('./1.txt',{
    highWaterMark:5
});
rs.setEncoding('utf8');//可以在创建流之后指定编码
//因为流是EventEmitter的子类
rs.on('data',function(data){
    console.log(data);
    rs.pause();//暂停触发data事件
});
setTimeout(function(){
    rs.resume();//重新开始触发data事件，恢复执行
},5000);
//当读完文件的时候会触发end事件
rs.on('end',function(){
    console.log('读完了');
    
});
//当读取文件出错的时候可以监听error事件
rs.on('error',function(){
    console.log('出错了');
    });

    /*********** */
    /*//假如文件为640k
    1.先从文件中读取64k，然后发射rs.emit('data');
    2.再从文件读取64k，然后再发射rs.emit('data');
    */