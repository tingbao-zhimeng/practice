// /**
//  * ES6 模版字符串 ``
//  * 插入变量 ${变量}
//  * 
//  * 字符串新增的方法
//  * 1.includes()  判断是否包含 返回 true 或false
//  * 2.startsWith() 判断字符串是否是在原字符串的头部返回true/false
//  * 3.endsWith() 判断字符串是否是在原字符串的结尾返回true/false
//  * 4.repeat()  将字符串重复n次返回重复后的新字符串
//  */

// let str = `hello,world`
// console.log(str.includes("h"))   // true
// console.log(str.startsWith("h"))  // true
// console.log(str.endsWith("d"))  // true
// console.log(str.repeat(3))  // hello,worldhello,worldhello,world


// /**
//  * 对象新增的方法
//  * 1. Object.assign()  用于对象的合并
//  * 2.Object.is()  比较两个值是否严格相等
//  */
// {
//   // 注意点: 如果不希望更改源对象，第一个参数可以给一个{}
//   let a = { name: 'zhangsan' }
//   let b = { age: 20 }
//   let ret01 = Object.assign({}, a, b)

//   let ret = Object.assign(a, b)
//   console.log(ret)
//   console.log(ret01)



//   //2.0bject.is()方法比较两个值是否严格相等
//   console.log(1 === 1)//true
//   console.log("1" == 1)//true
//   console.log("1" === 1)//false
//   console.log(Object.is(1, 1))//true
//   console.log(Object.is("1", 1))//false
//   console.log(Object.is({}, {}))// 对象中比较的是内存地址 false
// }

{

  // ES5
  // for


}