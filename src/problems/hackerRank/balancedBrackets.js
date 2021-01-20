function isBalanced(s) {
  if (s.length < 2) return false;
  const open = ["(", "[", "{"];
  const matches = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) stack.push(s[i]);
    else {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] !== matches[s[i]]) return false;

      stack.pop();
    }
  }

  if (stack.length === 0) return true;
  return false;
}

module.exports = isBalanced;
