
var fs = require('fs');
//var content = fs.readFileSync('./1.txt',{encoding:'ascii'});
//console.log(content);
var content = fs.readFileSync('./1.txt');
console.log(content.toString());
/*********************************** */
//所有的异步方法要晚于同步方法执行
fs.readFile('./1.txt',{encoding:'utf8'},(err,data)=>{
    console.log(data);
});