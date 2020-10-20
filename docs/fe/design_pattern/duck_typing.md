# 什么是鸭子类型?

Q: 什么是鸭子类型?<br/>
A: 通俗叫法: “如果它走起路来像鸭子, 叫起来也像鸭子, 那么它就是鸭子”

#### 代码模拟鸭子类型

```javascript
// 判断某种动物是不是“鸭子” 如果是鸭子就加入合唱团
const duck = {
  duckSinging: function() {
    console.log('gagaga')
  }
}

const chicken = {
  duckSinging: function() {
    console.log('gagaga')
  }
}

let choir = []
const joinChoir = function(animal) {
  if(animal && typeof animal.duckSingsing === 'function') {
    choir.push(animal)
  }
}

// join
joinChoir(duck)
joinChor(chicken)
```
此时的duck & chicken某种意义上都会gagaga叫, 所有都是“🦆”

可以用“多态”实现上面一段代码:
```javascript
const makeSound = function(animal) {
  if(animal instanceof Duck) {
    console.log('gagaga')
  }
  if(animal instanceof Chicken) {
    console.log('gegege')
  }
}
const Duck = function() {}
const Chicken = function() {}

makeSound(new Duck())
makeSound(new Chicken())
```

### 对象“多态性”
进一步改写上面代码
```javascript
const makeSound = function(animal) {
  animal.sound()
}

const Duck = function() {}
Duck.prototype.sound = function() {
  console.log('gagaga')
}
const Chicken = function() {}
Chicken.prototype.sound = function() {
  console.log('gigigi')
}

makeSound(new Duck())
makeSound(new Chicken())

// 在不动用makeSound的前提下追加对象

const Dog = function() {}
Dog.prototype.sound = function() {
  console.log('wangwangwang')
}

makeSound(new Dog())
```