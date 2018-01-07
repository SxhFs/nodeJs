var fs = require('fs');
//创建目录
//fs.mkdirSync('a');
//如果是异步方法，最后一个参数一定就是回调函数
// fs.mkdir('a/a',function(err){
//     console.log(err);
// })

/************************************** */
//读取指定目录下面的所有文件，结果是个数组
fs.readdir('./a/a',function(err,files){
    console.log(files);
    files.forEach(function(file){
        fs.stat('./a/',function(err,stat){
            //stat.isDirectory()是否为目录
            if(stat.isFile()){//是否为一个文件
                fs.readFile('./a/a/'+file,function(err,data){
                    console.log(data.toString());
                });
            } else{
                console.log('这是一个目录');
            }
        });
        
    });
});

/****************************************/
//获得文件的详情描述
fs.stat('./a',function(err,stat){
    console.log(stat);
    /*atime: 2018-01-07T12:51:24.000Z,//访问时间
    mtime: 2018-01-07T12:42:56.000Z,//修改时间,只要改变就会变
    ctime: 2018-01-07T12:42:56.000Z,//改变时间，内容改了才会变
    birthtime: 2018-01-07T12:42:56.000Z//创建时间
    */
});

/************************************ */
//判断文件夹或者文件是否存在
fs.exists('./a',function(exists){
    console.log(exists);
});

/********************************* */
//根据相对路径获取绝对路径
console.log(__dirname+'/a');
var path = require('path');
console.log(path.join(__dirname,'a'));