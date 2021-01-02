const midpoint = (L) => {
  let pointerSlow = L.head;
  let pointerFast = L.head;

  while (pointerFast.next && pointerFast.next.next) {
    pointerSlow = pointerSlow.next;
    pointerFast = pointerFast.next.next;
  }

  return pointerSlow;
};

module.exports = midpoint;
