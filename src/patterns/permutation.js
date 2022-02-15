// http://pythontutor.com/visualize.html#code=const%20permutation%20%3D%20%28str,%20prefix%20%3D%20%22%22%29%20%3D%3E%20%7B%0A%20%20if%20%28str.length%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20console.log%28prefix%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20str.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20let%20rem%20%3D%20str.substr%280,%20i%29%20%2B%20str.substr%28i%20%2B%201%29%3B%0A%20%20%20%20%20%20permutation%28rem,%20prefix%20%2B%20str%5Bi%5D%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%0Apermutation%28%22123%22%29%3B&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

const permutation = (str, prefix = '') => {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substr(0, i) + str.substr(i + 1);
      permutation(rem, prefix + str[i]);
    }
  }
};

module.exports = permutation;
