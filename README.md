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
