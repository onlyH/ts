/**
 * 对象类型接口
 */
interface List {
  id: number;
  name: string;
  [x: string]: any;
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((i) => console.log(i.name, i.id));
}

let list = {
  data: [
    { id: 1, name: "xx" },
    { id: 2, name: "xx2" },
  ],
};
let l1 = render(list);
let l2 = render({
  data: [
    { id: 3, name: "xx", male: "man" },
    { id: 4, name: "xx2" },
  ],
} as Result);
let l3 = render(<Result>{
  data: [
    { id: 5, name: "xx", male: "man" },
    { id: 6, name: "xx2" },
  ],
});

/**
 * 函数类型接口
 */
// 除了使用接口定义还可以使用 类型别名 type

// 混合定义

export { l1, l2, l3 };
