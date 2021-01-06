const validate = (n, min = null, max = null) => {
  if (max !== null && n.data > max) return false;
  if (min !== null && n.data < min) return false;

  if (n.left && !validate(n.left, min, n.data)) return false;
  if (n.right && !validate(n.right, n.data, max)) return false;

  return true;
};

// my solution
const validate2 = (n, min = null, max = null) => {
  if (n === null) return true;

  if (max !== null && n.data > max) return false;
  if (min !== null && n.data < min) return false;

  return validate2(n.left, min, n.data) && validate2(n.right, n.data, max);
};

module.exports = { validate, validate2 };
