import { linkedList } from "./linkedList.js";

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("capybara");

console.log(list.print());
