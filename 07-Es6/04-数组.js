/**
 * 1.扩展运算符  ...
 * 2.find(callback)  找出第一个符合元素的数组成员
 * 3.findIndex(callback)  查找，找出第一个符合条件的数组成员对应的索引
 * 4. Array.of()  将一组值转换为数组(了解)
 * 5. Array.from(obj[,fn]) 将对象转换成真正的数组
 * 
 * 
 */

let arr1 = ['a', 'b', 'c']
let arr2 = [...arr1]
arr1.push("d")
console.log(arr1, arr2)
let arr3 = ['x', 'y', 'z']
let arr4 = [...arr1, arr2]
console.log(arr4)
{
  let arr1 = [1, 2, 3, 4, 5, 6]
  let result = arr1.find(function (item) {
    return item > 3
  })
  console.log('result', result)

}

// Array.of() 将一组值转化为数组
// console.log(Array.of(1, 2, 3))  // [1,2,3]

// Array.form(obj,[fn]) 将对象转换成真正的数组
// 获取到的dom对象集合并不是真正的数组
// arguments 也不是真正的数组
// 数组可以使用forEach 方法
//  转换条件: 需要时可遍历的对象，需要有length 属性
{
  function fn () {
    Array.from(arguments).forEach(function (item) {
      console.log(item)
    })
    fn("zhangsan", "lisi")
    console.log(["zhangsan"])
    let obj = { 0: "zhangsan" }
    console.log(Array.from(obj))
  }
}

// 数组的其他操作
let ret1=3**3
console.log(ret1);  // 3的三次幂 等同于 Math.pow(x,y)
