// https://www.hackerrank.com/challenges/new-year-chaos/problem

const minimumBribesSlow = (q) => {
  let totalBribes = 0;

  for (let i = 0; i < q.length; i++) {
    const p = i + 1;

    if (q[i] - p > 2) {
      // console.log("Too chaotic");
      return "Too chaotic";
    }

    for (let j = i + 1; j < q.length; j++) if (q[j] < q[i]) totalBribes++;
  }
  // console.log(totalBribes);
  return totalBribes;
};

const minimumBribes = (q) => {
  let totalBribes = 0;

  let e1 = 1;
  let e2 = 2;
  let e3 = 3;

  for (let i = 0; i < q.length; i++) {
    if (q[i] === e1) {
      e1 = e2;
      e2 = e3;
      e3++;
    } else if (q[i] === e2) {
      totalBribes++;
      e2 = e3;
      e3++;
    } else if (q[i] === e3) {
      totalBribes += 2;
      e3++;
    } else {
      // console.log("Too chaotic");
      return "Too chaotic";
    }
  }
  // console.log(totalBribes);
  return totalBribes;
};

const minimumBribesSwapping = (q) => {
  let bribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    let position = i + 1;

    if (q[i] !== position) {
      if (i - 1 >= 0 && q[i - 1] === position) {
        bribes++;
        [q[i], q[i - 1]] = [q[i - 1], q[i]]; // swapping
      } else if (i - 2 >= 0 && q[i - 2] === position) {
        bribes += 2;
        q[i - 2] = q[i - 1];
        q[i - 1] = q[i];
        q[i] = position;
      } else {
        return "Too chaotic";
      }
    }
  }

  return bribes;
};

module.exports = { minimumBribes, minimumBribesSlow, minimumBribesSwapping };
