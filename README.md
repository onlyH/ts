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
