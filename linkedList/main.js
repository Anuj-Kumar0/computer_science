import { linkedList } from "./linkedList.js";

const list = linkedList();

console.log(list.append("dog"));
console.log(list.prepend("cat"));
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.print());
console.log(list.at(2));
console.log(list.pop());
console.log(list.print());
