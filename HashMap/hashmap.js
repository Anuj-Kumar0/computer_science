export const hashMap = function () {
  let loadFactor = 0.75;
  let capacity = 16;
  let growth = loadFactor * capacity;
  let bucket = new Array(capacity).fill().map(() => []);

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
      console.log(bucket);

      if (bucket[index] > growth) {
        capacity *= 2;
      }
    },
  };
};
