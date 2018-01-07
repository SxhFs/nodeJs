var fs = require('fs');
function copy(src,target) {
    fs.readFile(src,function(err,data){
        if (err) {
            console.log(err);
        } else {
            fs.writeFileSync(target,data);
        }
        
    });
}
copy('./3.txt','./4.txt');