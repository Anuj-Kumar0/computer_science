const hashMap = function () {
  let loadFactor;
  let capacity;
  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode %= 16;
      }

      return hashCode;
    },
    set(key, value) {
      let index = this.hash(key);
    },
  };
};
