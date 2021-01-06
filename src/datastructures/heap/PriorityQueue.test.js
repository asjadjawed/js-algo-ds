const PQ = require("./PriorityQueue");

describe("Test for Max Binary Heap insert and remove", () => {
  let pQ;

  beforeEach(() => {
    pQ = new PQ();

    pQ.insert("Common Cold", 5);
    pQ.insert("Gunshot Wound", 1);
    pQ.insert("High Fever", 4);
    pQ.insert("Broken Arm", 2);
    pQ.insert("Glass in Foot", 3);
  });

  test("Insert into Heap", () => {
    pQ.insert("The Cooties", 10);
    expect(pQ.data[pQ.data.length - 1].priority).toEqual(10);
    pQ.insert("The Black Plague", 0);
    expect(pQ.data[0].priority).toEqual(0);
  });

  test("remove from heap", () => {
    expect(pQ.remove().priority).toEqual(1);
    expect(pQ.remove().priority).toEqual(2);
    expect(pQ.remove().priority).toEqual(3);
    expect(pQ.remove().priority).toEqual(4);
    expect(pQ.remove().priority).toEqual(5);
    expect(pQ.remove()).toBeUndefined();
  });
});
