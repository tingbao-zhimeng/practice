// 06-calss.js

/**
 * 在ES6中，class(类)作为对象的模板被引入，可以通过class关键字定义类
 * class 的本质是 function.
 * 它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
 */

// ES5 中
// 构造函数
{
  function Person (name, age) {
    this.name = name
    this.age = age
  }
  Person.prototype.sayHi = function () {
    console.log(`你好我叫${this.name}我今年$(this.age)`)
  }
  let person = new Person('mushu', 23)
  console.log(person)  // Person { name: 'mushu', age: 23 }
}


{
  // class 类 本质依然是function
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    // 定义方法 不需要function 关键字，默认都是定义在原型上的
    sayHi () {
      console.log(`你好我叫${this.name},今年${this.age}岁`)
    }
  }
  let person = new Person("张三", 20)
  console.log(person)
  person.sayHi()


  // 继承
  class Student extends Person {
    constructor(name, age, score) {
      // super 调用父的构造函数,必须放在第一行否则会报错
      super(name, age)
      this.score = score
    }
  }
  let stu = new Student("mushu", 20, 200)
  console.log(stu)
}
// 设置set 和get
{
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    // 访问pName 的时候执行了get 方法
    get pName () {
      console.log('执行了pName')
      return this.name
    }
    // 修改了pName执行set  (可以对数据进行校验或其他二次处理)
    set pName (val) {
      console.log('执行了set')
      if (val !== "zhaoliu") {
        console.log('设置值错误')
      } else {
        this.name = val
      }
    }
  }
  let per = new Person('lisi', 20)
  console.log(per)
  console.log(per.name)  // 获取属性的时候自动执行get 方法
  per.name = 'hhah'   // 修改的时候执行set 方法 传入的值就是修改的值
  console.log(per)
}

{
  // 静态属性或静态方法
  // 直接通过类名打点的就是静态属性/静态方法
  // 普通属性/普通方法 需要实例化对象 通过实例名调用 例如: p.name p.age
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    // 定义方法 不需要function 关键字，默认都是定义在原型上的
    sayHi () {
      console.log(`你好我叫${this.name},今年${this.age}岁`)
    }
    // 定义静态属性
    static type = 'type1'
    // 静态方法
    static tell () {
      console.log('hhhh', Person.tell)
    }
  }
  console.log('101', Person.tell)

  Person.type = "121"  // 静态属性
  console.log(Person.type)

}



// 333333333333333
console.log('3333')

// {
//   var Animal = (function () {
//     function MyConstructor (name) {
//       this.name = name
//     }
//     MyConstructor.prototype.speak = function speak () {
//       console.log(this.name + ' makes a noise.')
//     }
//     return MyConstructor
//   })()
//   var animal = new Animal('animal')
//   animal.speak() // animal makes a noise.

// }


{
  class Animal {
    constructor(name) {
      this.name = name
    }
    speak () {
      console.log(this.name + ' makes a noise.')
    }
    get pName () {
      return this.name
    }
    set pName (val) {
      this.name = val
    }
  }
  let animal = new Animal('animal')
  animal.speak()
  console.log(animal)

  class Lion extends Animal {
    constructor(name) {
      super(name)
    }
    speak () {
      super.speak()
      console.log(this.name + ' roars 🦁')
    }
  }
  var lion = new Lion('Simba')
  lion.speak()

  // var Lion = (function () {
  //   function MyConstructor (name) {
  //     Animal.call(this, name)
  //   }
  //   // 原型继承
  //   MyConstructor.prototype = Object.create(Animal.prototype)
  //   MyConstructor.prototype.constructor = Animal
  //   MyConstructor.prototype.speak = function speak () {
  //     Animal.prototype.speak.call(this)
  //     console.log(this.name + ' roars 🦁')
  //   }
  //   return MyConstructor
  // })()
  // var lion = new Lion('Simba')
  // lion.speak() // Simba makes a noise.
  // Simba roars.
}

{



}