# ts
ts集合

```
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Direction.UP);
console.log(Direction[0]) // UP

// 变量提升 const enum
const enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const avc = Directions.UP

type c = 0
declare let b:c

b = 1 //error
b = Directions.UP
```

```
//联合枚举类型

enum Direction2 {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
declare let aw : Direction2

enum Animal {
    Dog,
    Cat
}
aw = Direction2.UP// ok
aw  = Animal.Dog// 不能将类型“Animal.Dog”分配给类型“Direction2”

我们把aw 声明为 Direction2 类型，可以看成我们声明了一个联合类型 Direction2.Up | Direction2.Down | Direction2.Left | Direction2.Right，只有这四个类型其中的成员才符合要求。
```

```
// 枚举合并

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Direction {
    Center = 1
}
```

```
// 为枚举添加静态方法
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

function isSummer(month:Month) {
    switch(month) {
        case Month.July:
        case Month.July:
        return true
        default:
            return false
    }
}


namespace Month {
    export function isSummer(month:Month) {
        switch(month) {
            case Month.July:
            case Month.July:
            return true
            default:
                return false
        }
    }
}
console.log(Month.isSummer(Month.January));

```


```
//接口(interface)
//TypeScript 的核心原则之一是对值所具有的结构进行类型检查,它有时被称做“鸭式辨型法”或“结构性子类型化”。

//在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。


interface Eat{
    (val:string):string
}
interface Users{
    name:string
    age?:number
    readonly isMale:boolean
    say:(word:string)=>string
    eat:Eat
}
const getUserName = (user:Users)=>user.name


// 属性检查

interface Config{
    width?:number
    [propName:string]:any //第二种添加字符串索引签名：
}
function CalculateAreas(config:Config):{area:number} {
    let squeare = 100;
    if(config.width) {
        squeare = config.width * config.width
    }
    return {area:squeare}
}
let mySquare = CalculateAreas({ widdth: 5 }); //类型“{ widdth: number; }”的参数不能赋给类型“Config”的参数。
//第一种使用类型断言：
let mySquares = CalculateAreas({ widdth: 5} as Config)

// 第三种将字面量赋值给另外一个变量：
let options:any = {widdth:5}
let myy = CalculateAreas(options)
```
```

// 可索引类型表示，具有一个索引签名，描述了对象索引的类型，还有相应的索引返回值类型
interface Phone{
    [name:string]:string
}
interface User1  {
    name:string
    age?:number
    readonly isMale:boolean
    say:()=>string
    phone:Phone

}
interface SuperUser{
    buy:()=>string
}
// 继承接口
interface VIPUser extends User,SuperUser{
    broadcast:()=>void
}

```


```
// 抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。
// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class Animals {
    abstract makeSound():void
    move():void{
        console.log('the ......success');
        
    }
}
// 创建子类继承基类,然后可以实例化子类
class Cat extends Animals {
    makeSound() {
        console.log('mm');
        
    }
}
const cat = new Cat()
cat.makeSound() //mm
cat.move() // the ......success

// 三类访问限定符，分别是: public、private、protected。

// class 可以作为接口

```
```
// 重载（Overload）,著名的全局状态管理库 Redux 的compose就是运用大量函数重载的典型案例
interface Direction3 {
    top: number,
    bottom?: number,
    left?: number,
    right?: number
  }

function assigned(all:number):Direction3
function assigned(top:number,left:number):Direction3
function assigned(top:number,left:number,right:number,bottom:number):Direction3
function assigned(a:number,b?:number,c?:number,d?:any) {
    if(b == undefined &&c==undefined && d==undefined) {
        b = c= d= a
    } else if(c== undefined && d==undefined) {
        c= a
        d=b
    }
    return{
        top:a,
        right:b,
        botton:c,
        left:d
    }
}
assigned(1)
assigned(1,2)
assigned(1,2,3) // error
assigned(1,2,3,4)

```

