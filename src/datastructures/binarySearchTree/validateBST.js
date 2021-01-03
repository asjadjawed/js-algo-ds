const validate = (n, min = null, max = null) => {
  if (max !== null && n.data > max) return false;
  if (min !== null && n.data < min) return false;

  if (n.left && !validate(n.left, min, n.data)) return false;
  if (n.right && !validate(n.right, n.data, max)) return false;

  return true;
};

module.exports = validate;
