/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let s = S.length - 1;
  let t = T.length - 1;

  const backSpace = (I, i) => {
    if (I[i] === "#") {
      let removeChar = 2;

      while (removeChar > 0) {
        i--;
        removeChar--;
        if (I[i] === "#") removeChar += 2;
      }
    }

    return i;
  };

  while (s >= 0 || t >= 0) {
    s = backSpace(S, s);
    t = backSpace(T, t);

    if (S[s] !== T[t]) {
      return false;
    } else {
      s--;
      t--;
    }
  }

  return true;
};

module.exports = backspaceCompare;
