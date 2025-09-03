import { hashMap } from "./hashmap.js";
import { hashSet } from "./hashmap.js";

const map = hashMap();

// set() and get()
map.set("carlos", "i am the old value");
map.set("carlos", "i am the new value"); // update
map.set("alice", "hello");
map.set("bob", "hi");

console.log("get carlos:", map.get("carlos")); // "i am the new value"
console.log("get alice:", map.get("alice")); // "hello"
console.log("get unknown:", map.get("unknown")); // undefined

// has()
console.log("has carlos?", map.has("carlos")); // true
console.log("has unknown?", map.has("unknown")); // false

// keys(), values(), entries()
console.log("keys:", map.keys()); // ["carlos", "alice", "bob"]
console.log("values:", map.values()); // ["i am the new value", "hello", "hi"]
console.log("entries:", map.entries()); // [["carlos", "i am the new value"], ["alice", "hello"], ["bob", "hi"]]

// remove()
console.log("remove carlos:", map.remove("carlos")); // true
console.log("remove unknown:", map.remove("unknown")); // false
console.log("has carlos after remove?", map.has("carlos")); // false

// length()
console.log("length:", map.length()); // 2

// clear()
map.clear();
console.log("length after clear:", map.length()); // 0
console.log("keys after clear:", map.keys()); // []

// debug()
map.set("newKey", "newValue");
console.log("debug:", map.debug());

//For HashSet Function

const set = hashSet();

// Add keys
set.set("apple");
set.set("banana");
set.set("cherry");
set.set("apple"); // duplicate, should not add

console.log("Has apple?", set.has("apple")); // true
console.log("Has mango?", set.has("mango")); // false

console.log("Keys:", set.keys()); // ["apple", "banana", "cherry"]
console.log("Entries:", set.entries()); // [["apple"], ["banana"], ["cherry"]]

console.log("Length:", set.length()); // 3

// Remove a key
console.log("Remove banana:", set.remove("banana")); // true
console.log("Remove mango:", set.remove("mango")); // false

console.log("Keys after removal:", set.keys()); // ["apple", "cherry"]
console.log("Length after removal:", set.length()); // 2

// Clear the set
set.clear();
console.log("Keys after clear:", set.keys()); // []
console.log("Length after clear:", set.length()); // 0

// Debug the set
console.log("Debug info:", set.debug());
