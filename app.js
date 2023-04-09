// 1

new Set([1,1,2,2,3,4]) // {1,2,3,4}

// 2

[...new Set("referee")].join("") // "ref"

// 3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//   0: {Array(3) => true}
//   1: {Array(3) => false}

// hasDuplicate 

hasDuplicate([1,3,2,1])
hasDuplicate([1,5,-1,4])

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// vowelCount

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = new Map();
    for (let i = 0; i < vowels.length; i++) {
      count.set(i, 0);
    }
    for (let char of str) {
      const lowerChar = char.toLowerCase();
      if (vowels.includes(lowerChar)) {
        count.set(vowels.indexOf(lowerChar), count.get(vowels.indexOf(lowerChar)) + 1);
      }
    }
    return count;
  }
  