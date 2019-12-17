const h1 = document.createElement('h1')
h1.innerHTML = "hello world"
document.body.appendChild(h1)

//boolean
let bool: boolean = false
bool = true

let bools: boolean = !!0
//number
let a: number = 123
let nums: number;
nums = 123;
nums = 0b1111011
nums = 0o173
nums = 0x7b

//string
let str: string = "shaun"
str = "li"
const first = "shaun"
const list = "sheep"
str = `${first}${list}`
console.log(str)

let strs: "Lisbon"


// array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
let list3: number | string[] = ["q", "d"]

//undefined,null
let u: undefined = undefined
let n: null = null

//object
let strlinit = "abc"
let strClone = strlinit
strClone = "def"
console.log(strlinit) //abc

let objLinit = {a: "aa"}
let objClone = objLinit
console.log(objClone) //{a:"aa"}
objLinit.a = "bb"
console.log(objClone)//{a:"bb"}

let obj: object
obj = {name: "shaun"}

// obj.name   error

function getKeys(obj: object) {
  return Object.keys(obj)
}

getKeys({a: 'a'})
// getKeys(123) error


//元祖:已知数组中每一个位置上的元素的类型
let tuple: [string, number, boolean]
tuple = ["a", 2, false]
tuple[1] = 3
tuple[0].split(".")

let tuples: [string, number]
tuples = ["q", 3]

// tuples = ["a", 2, "c"] error 越界元素
//2.6之后的版本类似于这样声明
interface Tuple extends Array<number | string> {
  0: string,
  1: number,
  length: 2
}

//2.6之前的版本，类似于这样声明
interface Tuples extends Array<number | string> {
  0: string,
  1: number
}


//enum 枚举
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}

const superAdmin = Roles.SUPER_ADMIN
console.log(superAdmin)

enum Enum {
  SUPER_ADMIN = 1,
  ADMIN,
  USER
}

enum Enums {
  SUPER_ADMIN = 1,
  ADMIN = 4,
  USER = 7
}

console.log(Enums[4])

//any 任意类型
let value: any
value = 1234
value = 'abc'
value = false
const array: any[] = [1, 'a', false]

//void 什么类型都不是,函数没有返回值时会用到
const consoleText = (text: string): void => {
  console.log(text)
}
// void 类型的变量只能赋值为 undefined 和 null ， 其他类型不能赋值给 void 类型的变量


// never 类型指那些永不存在的值的类型，它是那些总会抛出异常或根本不会有返回值的函数表达式的返回值类型，
// 当变量被永不为真的类型保护所约束时，该变量也是 never 类型

// const errorFunc = (message: string): never => {
//   throw new Error(message) //总会抛出异常，用来表明它的返回值是永不存在的
// }

// const infiniteFunc = ():never=> {
//   while (true){}//死循环
// }
// never 类型是任何类型的子类型，所以它可以赋值给任何类型；而没有类型是 never 的子类型，所以除了它自身没
// 有任何类型可以赋值给 never 类型， any 类型也不能赋值给 never 类型。

// let neverVariable = (()=> {
//   while(true) {}
// })()
// neverVariable = 123 error  不能将类型"number"分配给类型"never


// unknown 未知的类型 unknown相对于any是安全的

// 交叉类型 -- 取多个类型的并集
const merge = <T, U>(arg1: T, arg2: U): T & U => {
  // 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
  let res = <T & U>{}
  // 这里使用Object.assign方法，返回一个合并后的对象
  res = Object.assign(arg1, arg2)
  return res
}
const info1 = {
  name: 'shaun'
}
const info2 = {
  age: 12
}
const shaunInfo = merge(info1, info2)
// console.log(shaunInfo.address)  // error 类型“{ name: string; } & { age: number; }”上不存在属性“address”

// 联合类型
const getLength = (content: string | number): number => {
  if (typeof content === 'string') return content.length
  else return content.toString().length
}
console.log(getLength('abc'))
console.log(getLength(123))