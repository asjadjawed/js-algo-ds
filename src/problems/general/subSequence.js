function isSubsequence(s1, s2) {
  let j = 0;
  for (let i = 0; i < s1.length; i++) {
    if (j > s2.length - 1) return false;

    const currIndex = s2.slice(j).indexOf(s1[i]);

    if (currIndex === -1) return false;
    j = currIndex;
  }

  return true;
}

module.exports = isSubsequence;
