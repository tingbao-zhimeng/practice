/**
 * 数组解构和对象解构的不同:
 *  ① 数据解构是按照顺序一一解构的
 *  ② 对象解构与顺序无关，是根据属性名和对象名进行比较。
 *
 */
//场景1: 使用解构赋值实现两数的交换
{
  let a = 10
  let b = 20;
  [a, b] = [b, a]
  console.log(a, b)
}

// 使用函数返回值
{
  function fn () {
    return [10, 20, 30]
  }
  let [a, b, c] = fn()
  console.log(a, b, c)
}


{
  // Symbol 代表独一无二的值
  let a = Symbol()
  let b = Symbol()
  console.log(a, b) //Symbol() Symbol()
  console.log(a == b)  //   false
}

/**
 * let 
 *  ① 将变量提升到代码块的顶部，而不是像ES5那样提升到函数的顶部
 *  ② let 是块级作用域，不能在声明之前引用
 * const  如果你想要一个变量保持不变使用const -> 可以理解为常量
 * var
 *
 */
//  IIEF 立即执行函数  {}
var array = [1, 2, 3, 4];
[first, , third] = array
console.log(first, third) // 1 3


{
  function margin () {
    let margins = { left: 1, right: 2, top: 3, bottom: 4 }
    return margins
  }
  let { left, bottom } = margin()
  console.log(left, bottom)
}


{
  var user = { firstName: 'Adrian', lastName: 'Mejia' }
  function getFullName ({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }
  console.log(getFullName(user)) // Adrian Mejia

}

{
  function settings () {
    return { display: { color: 'red' }, keyboard: { layout: 'querty' } }
  }
  var { display:{color}, keyboard:{layout} } = settings()
  console.log(color, layout)
}