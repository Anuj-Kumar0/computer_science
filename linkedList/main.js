import { linkedList } from "./linkedList.js";

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

/* Below are the ways to try each and every method in the linkedList.js*/

// ---------- append ----------
// console.log("APPEND TESTS:");
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.toString()); // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// ---------- prepend ----------
// console.log("\nPREPEND TEST:");
// list.prepend(5);
// console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// ---------- size ----------
// console.log("\nSIZE TEST:");
// console.log(list.size()); // 4

// ---------- head ----------
// console.log("\nHEAD TEST:");
// console.log(list.head()); // 5

// ---------- tail ----------
// console.log("\nTAIL TEST:");
// console.log(list.tail()); // 30

// ---------- at ----------
// console.log("\nAT TEST:");
// console.log(list.at(0).value); // 5
// console.log(list.at(2).value); // 20

// ---------- pop ----------
// console.log("\nPOP TEST:");
// list.pop();
// console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// ---------- contains ----------
// console.log("\nCONTAINS TEST:");
// console.log(list.contains(10)); // true
// console.log(list.contains(30)); // false

// ---------- find ----------
// console.log("\nFIND TEST:");
// console.log(list.find(10)); // 1
// console.log(list.find(100)); // null

// ---------- toString ----------
// console.log("\nTOSTRING TEST:");
// console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// ---------- insertAt ----------
// console.log("\nINSERTAT TEST:");
// list.insertAt(15, 2);
// console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

// ---------- removeAt ----------
// console.log("\nREMOVEAT TEST:");
// list.removeAt(1);
// console.log(list.toString()); // ( 5 ) -> ( 15 ) -> ( 20 ) -> null
