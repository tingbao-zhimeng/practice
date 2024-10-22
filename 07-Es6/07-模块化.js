/**
 * 使用js进行引入的弊端:
 * 1. 依赖关系问题 --- 可维护
 * 2. 变量名或者方法名冲突，没法私有化 --- 命名空间（保护变量，避免冲突）
 * 
 */
//  js 中模块的引入  需要添加type="module"
<script src="./06.class.js" type="module"></script>
// 2. 模块的导入导出
export { css } // 导出
import { css } from './01-解构赋值' // 导入
// 使用了模块化后，如果不导出，其他地方无法使用声明的变量和函数
//export 导出变量
//导出变量
//方式一:
/* let name ="张三";
let age =20;
let address =天河区"
export{name,age,address}
*/
//方式二:
export let name = "张三"; export let age = 25; export let address = "花都区"
export let obj = {
  name: 'zhaoliu',
  age: 20
}
//导出函数
export function fn () {
  console.log("我是fn函数..")
}
//import 导入模块
//1.1 导入语法
import { name, age, address, obj, fn } from './export.js'
fn()
//1.2 导入的变量不可以修改的
age = 60  // 报错
console.log("import:", name, age, address, obj)

//1.3 取别名 as
//当导入的变量名与自身定义的名称冲突时，可以取别名
import { fn as fn1 } from './export.js'
function fn () {
  console.log("我是import里面的fn函数")
}
fn()
fn1()

// 模块的整体加载
import * as obj from './test.js'
console.log(obj);  // 模块的整体加载


// 默认导入和导出
/**
 * 一个模块只能有一个默认导出
 *  本质上就是导出一个叫 default的变量或者方法
 * export default  // 默认导出匿名加载 没有{}
 * import myname from './export.js'
 */


/**
 * 有js文件都在一个htm1中引入，造成以下不良影响:
请求过多 : 首先我们要依赖多个模块，那样就会发送多个请求，导致请求过多
依赖模糊 : 我们不知道他们的具体依赖关系是什么，也就是说很容易因为不了解他们之间的依赖关系导致加载先后顺序出错。
难以维护 : 以上两种原因就导致了很难维护，很可能出现牵一发而动全身的情况导致项目出现严重的问题，
 ES6Module模块带来的好处?
  避免变量污染，命名冲突
  提供代码的复用率、维护性
  有效处理侬赖关系
 * 
 * 
 */
  // export 命令:用于规定模块对外的接口
  // 外部能够读取模块内部的某个变量、函数
  // 使用as关键字重命名
  // 该命令可以出现在模块的任何位置，只要处于模块顶层即可，除了块作用域内(import也是如此)
  // import 命令:用于输入其它模块提供的功能
  // 变量、函数
  // 使用as关键字
  // 输入的变量都是只读的
  // Import命令具有提升效果