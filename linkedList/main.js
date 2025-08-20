import { linkedList } from "./linkedList.js";

const list = linkedList();

console.log(list.append("dog"));
console.log(list.prepend("cat"));
console.log(list.size());
console.log(list.head());
console.log(list.tail());
