var fs = require('fs');
fs.writeFileSync('./2.txt','付帅',{encoding:'utf8'});

//回调函数第一个参数永远是ERROR对象
fs.writeFile('./3.txt','付帅2',{encoding:'utf8'},function(err){
    console.log(err);
});