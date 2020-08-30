const countdown = (n = 10) => {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
};

module.exports = {
  countdown,
};
