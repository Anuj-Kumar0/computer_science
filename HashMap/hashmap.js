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
    remove(key) {
      let index = this.hash(key);
      for (let i = 0; i < bucket[index].length; i++) {
        if (bucket[index][i][0] === key) {
          bucket[index].splice(i, 1);
          size++;
          return true;
        }
      }
      return false;
    },
    length() {
      return size;
    },
    clear() {
      bucket = new Array(capacity).fill().map(() => []);
      size = 0;
      capacity = 16;
      growth = loadFactor * capacity;
      return bucket;
    },
    keys() {
      let arrKeys = [];
      for (let a of bucket) {
        for (let key of a) {
          arrKeys.push(key[0]);
        }
      }
      return arrKeys;
    },
    values() {
      let arrValue = [];
      for (let a of bucket) {
        for (let value of a) {
          arrValue.push(value[1]);
        }
      }
      return arrValue;
    },
    entries() {
      let arrPair = [];
      for (let a of bucket) {
        for (let kv of a) {
          arrPair.push([kv[0], kv[1]]);
        }
      }
      return arrPair;
    },
    debug() {
      return { capacity, size, growth, bucket };
    },
  };
};

export const hashSet = function () {
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
      for (let [b] of a) {
        let index = hashFunc(b);
        newBucket[index].push([b]);
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
    set(key) {
      let index = this.hash(key);
      for (let key_value of bucket[index]) {
        if (key_value[0] === key) {
          return;
        }
      }
      bucket[index].push([key]);
      size++;
      console.log(bucket);

      if (size > growth) {
        doubleSize(this.hash);
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
    remove(key) {
      let index = this.hash(key);
      for (let i = 0; i < bucket[index].length; i++) {
        if (bucket[index][i][0] === key) {
          bucket[index].splice(i, 1);
          size--;
          return true;
        }
      }
      return false;
    },
    length() {
      return size;
    },
    clear() {
      bucket = new Array(capacity).fill().map(() => []);
      size = 0;
      capacity = 16;
      growth = loadFactor * capacity;
      return bucket;
    },
    keys() {
      let arrKeys = [];
      for (let a of bucket) {
        for (let key of a) {
          arrKeys.push(key[0]);
        }
      }
      return arrKeys;
    },
    entries() {
      let arrPair = [];
      for (let a of bucket) {
        for (let k of a) {
          arrPair.push([k[0]]);
        }
      }
      return arrPair;
    },
    debug() {
      return { capacity, size, growth, bucket };
    },
  };
};
