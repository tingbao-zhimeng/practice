// Map 数据结构————> 键值对结构
// 1. 初始化
let map = new Map()
// 2. 获取容器属性
console.log(map.size)
// 3. 添加成员 set(key，value)
map.set('name', '张三')
map.set('age', '45')

console.log(map.get('name')) //4. 获取成员数据
// 5. 删除成员
map.delete('name')
// map.clear() // 强制清除所有
console.log(map)

// 6. 遍历map
// 6.1 遍历keys
for (let k of map.keys()) {
  console.log('key', k) // age
}
// 6.2 遍历maps
for (let v of map.values()) {
  console.log('value', v) // 45
}
// 6.3 遍历 key:value
for (let [k, v] of map.entries()) {
  console.log('k,v', k, v)
}
// 使用forEach 进行遍历
map.forEach(function (v, k) {
  console.log(k, v) // 45 age
})
map.forEach((v, k) => {
  console.log(k, v) // 45 age
})

/**
 * set 成员的值都是唯一的，没有重复的
 * 初始化:new Set()/ new Set(array)
 * Set大小: size属性
 * 增加元素: add()
 * 判断是否存在:has()   返回true/false
 * 删除元素:delete()  clear()
 * 遍历: for...of
 * keys()
 * values()
 * entries()
 */
{
  // 1. 初始化创建set
  let set = new Set()
  // 2. 添加成员
  set.add('a')
  set.add('b')
  set.add('a') // 当添加重复数据的时候，不报错但是添加失败
}
{
  // 使用set 快速去重
  let arr = ['a', 'b', 'b', 'f', 'h']
  let list = new Set(arr)
  console.log(list)
}

{
  let arr = ['a', 'b', 'f', 'h']
  let list = new Set(arr)
  console.log(list.has('a')) // true
}
{
  let arr = ['张三', '李四', '王五']
  let list = new Set(arr)
  // 键值对 set 中 键和值都是一样的
  list.forEach(function (k, v, itemlist) {
    console.log('forEach', k, v, itemlist)
  })
  // 获取所有的keys 值
  console.log('keys', list.keys())
  for (let key of list.keys()) {
    console.log('keys', key)
  }
  for (let val of list.values()) {
    console.log('val', val)
  }
  // 获取所有的values 值
  console.log('keys', list.values())
  // entries 获取所有的键值对的集合
  console.log('entries()', list.entries())
  for (let object of list.entries()) {
    console.log('entries', object)
  }
}

/**
 * 如果后期频繁访问使用map,因为有一个get方法，可以通过key获得value
 * set  获取数据因为没有索引下标所以需要通过循环的方式
 */
