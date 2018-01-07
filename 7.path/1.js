var path = require('path');
//将多个参数值字符串结合为一个路径字符串
console.log(path.join(__dirname,'a','b'));

/********* */
//得到当前文件的绝对路径
console.log(path.resolve());
console.log(path.resolve('a','b','c','..'));
/*********** */

//获取当前路径中的文件名
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

//获取文件的扩展名
console.log(path.extname(__filename));

/*************** */
//环境变量路径分隔符
console.log(path.delimiter); 
//获取操作系统指定的分隔符
console.log(path.sep); 