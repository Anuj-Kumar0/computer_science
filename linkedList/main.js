import { linkedList } from "./linkedList.js";

const list = linkedList();
list.append("dog");
list.append("cat");

console.log(list.print());
