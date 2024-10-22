{
  function fn (time = 1000) {
    console.log(time)
  }
  fn(2000)   // 设置输出对应的值  2000
  fn()   // 不设置输出默认值      1000
}

/**
 * 箭头函数
1.初体验
2.适用场景-回调函数 setTimeo比t(),forEach()
3.有参函数和无参函数定义
4.如果返回值是一个对象，则必须使用()
5.代码块多行代码
6.箭头函数注意点:
  6.1.函数体的this是指的定义时的对象。
  6.2.不可以用作构造函数
  6.3.不可以使用arguments对象
  6.4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数
 */
{
  // 箭头函数
  let fn2 = () => {
    return 99
  }
  console.log(fn2())
  // settiomeout
  let person = {
    fn () {
      setTimeout(() => {
        // console.log(1)
      }, 1000)
    }
  }
  person.fn()


  // 场景
  let arr = ["zhangsan", "lisi", "wangwu"]
  arr.forEach((item) => {
    console.log(item)
  })
}

{
  // 如果函数体有多行 （如果有返回值，需要手动return）
  let fn = () => {
    console.log('a')
    console.log('b')
    return 99
  }
  console.log(fn())
}
{
  // 如果返回值是一个{}对象，需要使用（）包裹起来
  let fn = () => ({ name: "zhangsan" })
  console.log(fn())

}
{
  // 6.2 不可以作为构造函数
  function Person (name) {
    this.name = name
  }
  let p = new Person("lisi")
  console.log(p)



  // let Person2 = (name) => {  // Person2 is not a constructor
  //   this.name = name
  // }
  // let p2 = new Person2("wangwu")
  // console.log(p2)
}


{
  // 6.3 箭头函数没有arguments 对象
  function fn () {
    console.log(arguments)
  }
  fn(10, 20, 30)

  let fn2 = (...args) => {
    console.log(arguments) // 报错
    console.log(...args)
  }
  fn2(40, 50, 60)
}

{

  function point (x = 0, y = -1, isFlag = true) {
    console.log(x, y, isFlag)
  }
  point(0, 0)
  point(0, 0, false)
  point(1)
  point()

}
console.log('1111111111111111111')

// {
//   function printf (format) {
//     var params = [].slice.call(arguments, 1)
//     console.log('params: ', params)
//     console.log('format: ', format)  //  %s %d %.2f
//   }
//   printf('%s %d %.2f', 'adrian', 321, Math.PI)
// }
{

  let printf = (...args) => {
    const format = args[0]
    var params = [].slice.call(args, 1)
    console.log('params: ', params)
    console.log('format: ', format)
  }
  printf('%s %d %.2f', 'adrian', 321, Math.PI)

}

