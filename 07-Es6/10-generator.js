/**
 * 
 * Generator 函数是ES6 提供的一种异步编程解决方案
 * Generator 函数是一个状态机，封装了多个内部状态。
 * 执行 Generator 函数会返回一个遍历器对象
 * Generator也是一个遍历器对象生成函数
 * 返回的遍历器对象，可以依次遍历Gene+ator 函数内部的每一个状态
 * 
 */
{
  //基本语法 * 
  //yield 暂停标志
  let tell = function* () {
    console.log("1")
    yield
    console.log("2")
    yield
    console.log("3")
  }
  let it = te11()
  // 通过next() 执行下一步,每当遇到yield会暂停执行。
  it.next()
}