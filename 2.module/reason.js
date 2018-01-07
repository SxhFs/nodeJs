//require的时候会执行下面的函数
var module = {
    exports:{}
};
(function(exports,require,module,__filename,__dirname){
    //exports = module.exports
/////////////
function add(a,b){
    return a+b;
}
/////////
//最后返回的一定是module.exports
    return module.exports
})