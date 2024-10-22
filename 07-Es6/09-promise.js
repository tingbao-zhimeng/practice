// // Promise:承诺。未来某个时间节点反馈数据给你，'
// {
//   // 基本语法
//   let promise01 = new Promise((resolve, reject) => {
//     console.log("promise ---承诺")
//     setTimeout(() => {
//       reject("分手了")
//     }, 2000)
//   })
//   // 通过then接收异步的结果
//   promise01.then(res => {
//     // 成功执行这里
//     console.log("res:", res)
//   }, err => {
//     // 失败执行这里
//     console.log("err:", err)
//   })
// }
// /**Promise对象代表一个异步操作，
// 有三种状态:pending(进行中)、fu1fi1led(已成功)和rejected(已失败)
// Promise对象的状态改变，只有两种可能:从pending变为fu1fi11ed和从pending变为rejected,
// 一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化。
// 并且一旦状态改变，promise.then()绑定的函数就会调用，*/

// {
//   // 模拟 先A后B再C
//   // then 可以链式操作
//   let ajax = (url, data) => {
//     return new Promise((resolve, reject) => {
//       // 定时器只是为了模拟异步请求的时长
//       setTimeout(() => {
//         console.log('请求', url)
//         resolve()
//       }, 2000)
//     })
//   }
//   ajax("/A").then(res => {
//     console.log('A请求的响应结果')
//     return ajax("/B")
//   }).then(res => {
//     console.log('B请求的响应结果')

//     return ajax("/C")
//   }).then(res => {
//     console.log('C请求的响应结果')

//   })
// }

// // promise.all([p1,p2,p3])  将整个promise 实例包装成一个新的pr omise
// // 场景: 请求多张图片信息,希望等所有图片全部加载完毕之后，再一起显示到页面中
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("rp1")
//   }, 3000)
// })
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("rp2")
//   }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("rp3")
//   }, 1000)
// })
// Promise.all([p1, p2, p3]).then(res => { console.log(res) })
// Promise.race([p1, p2, p3]).then(res => {
//   console.log('速度最快的', res)
// })
// // promise.race([p1,p2,p3]) 将多个promise 实例包装成一个新的promise
// // 实例中哪一个响应的快，结果就是哪一个



console.log('*********************')
// {
//   let printAfterTimeout = (message) => {
//     return new Promise((resolve) => {
//       // console.log(message);
//       resolve(message)
//     })
//   }
//   printAfterTimeout('Hello').then(res => {
//     console.log(res)
//     return printAfterTimeout(res + " " + " Reader")
//   }).then(res => {
//     console.log(res)
//   })
// }



{

  class Animal {
    constructor(name) {
      this.name = name
    }
    speak () {
      return new Promise((resolve) => {
        resolve(this.name)
      })
    }
    get pName () {
      return this.name
    }
    set pName (val) {
      this.name = val
    }
  }
  let animal = new Animal('animal')
  animal.speak().then(res => {
    // console.log(res)
    console.log(res + ' makes a noise.')

  })

  class Lion extends Animal {
    constructor(name) {
      super(name)
    }
    speak () {
      super.speak().then(res => {
        console.log(res + ' roars 🦁')

      })
    }
  }
  var lion = new Lion('Simba')
  lion.speak()


}