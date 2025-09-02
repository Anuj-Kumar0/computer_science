export const hashMap = function () {
  let loadFactor = 0.75;
  let capacity = 16;
  let growth = loadFactor * capacity;
  let bucket = new Array(capacity).fill().map(() => []);
  let size = 0;

  function doubleSize(hashFunc) {
    capacity *= 2;
    growth = loadFactor * capacity;

    let newBucket = new Array(capacity).fill().map(() => []);

    for (let a of bucket) {
      for (let [b, c] of a) {
        let index = hashFunc(b);
        newBucket[index].push([b, c]);
      }
    }
    bucket = newBucket;
  }
  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode %= capacity;
      }

      return hashCode;
    },
    set(key, value) {
      let index = this.hash(key);
      for (let key_value of bucket[index]) {
        if (key_value[0] === key) {
          key_value[1] = value;
          console.log(bucket);
          return;
        }
      }
      bucket[index].push([key, value]);
      size++;
      console.log(bucket);

      if (size > growth) {
        doubleSize(this.hash);
      }
    },
    get(key) {
      let index = this.hash(key);
      for (let key_value of bucket[index]) {
        if (key_value[0] === key) {
          return key_value[1];
        }
      }
    },
    has(key) {
      let index = this.hash(key);
      for (let key_value of bucket[index]) {
        if (key_value[0] === key) {
          return true;
        }
      }
      return false;
    },
    debug() {
      return { capacity, size, growth, bucket };
    },
  };
};
