var buf1 = new Buffer(6);//指定buffer的长度
//buf1[0] = 0;
buf1.fill(0);//把buffer中的所有元素置为0
console.log(buf1);
//数组里一定放的是一个数字，范围在0~255之间
//var buf2 = new Buffer([15,16,17]);
var buf2 = new Buffer([0x15,0x16,0x17]);
console.log(buf2);

//通过字符串来创建
var buf3 = new Buffer('abc','utf8');//97,98,99
console.log(buf3);
//住的utf8的编码是多少  阮一峰字符编码
//1.先得到珠的Unicode码
//2.再转成二进制
//从后往前填
//再转16进制