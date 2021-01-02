const circular = (L) => {
  let slow = L.head;
  let fast = L.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};

module.exports = circular;
