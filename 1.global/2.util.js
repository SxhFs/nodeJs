//util node自带的模块
var util = require('util');
function Parent(){

}
function Child(){
    
    }
util.inherits(Child,Parent);//子类继承父类，child的原型指向了parent的原型实例
var child = new Child;
util.inspect('child')//将对象转为字符串

var obj = new Object();
obj.name = 'sxh';
Object.defineProperty(obj,'age',{
    enumerable:true ,//为true时该属性为可枚举的
    configurable:true ,//可配置，是否可删除该属性
    writable:false ,//是否可以修改值
    value:'222'
});
for (var attr in obj) {
    console.log(attr);
}
console.log(util.inspect(obj,{
    showHiddien:true
}));
//isArray、isRegExp、isData