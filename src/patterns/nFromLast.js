const fromLast = (L, n) => {
  let returnNode = L.head;
  let forwardNode = L.head;

  while (forwardNode.next) {
    for (let i = 0; i < n && forwardNode; i++) forwardNode = forwardNode.next;

    forwardNode = forwardNode.next;
    returnNode = returnNode.next;
  }

  return returnNode;
};

module.exports = fromLast;
