import { hashMap } from "./hashmap.js";

const map = hashMap();
map.set("carlos", "i am the old value");
map.set("carlos", "i am the new value");

// for (let i = 1; i <= 20; i++) {
//   map.set(`key${i}`, `value${i}`);
//   console.log(`Inserted key${i}, capacity:`, map.capacity); shows capacity
//   console.log(map.debug());
// }

// console.log(map.get("carlos"));
// console.log(map.has("carlo"));
