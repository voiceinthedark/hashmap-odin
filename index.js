import Hashmap from "./hashmap.js";

const hashmap = new Hashmap()

hashmap.set('kim', 45)
hashmap.set('jum', 37)
hashmap.set('tom', 'library')
hashmap.set('fat', 'tren')
hashmap.set('Mik', 39)

console.log(hashmap.get('kim'))
console.log(hashmap.get('tom'))
console.log(hashmap.get('fat'))
console.log(hashmap.length())
hashmap.remove('jum')
console.log(hashmap.length()) // 4

console.log(hashmap.keys())
