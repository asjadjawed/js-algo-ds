/* As another example of mutual recursion, consider a two-player game in which there are n initial pebbles on a table. The players take turns, removing either one or two pebbles from the table, and the player who removes the final pebble wins. Suppose that Alice and Bob play this game, each using a simple strategy:

Alice always removes a single pebble
Bob removes two pebbles if an even number of pebbles is on the table, and one otherwise
Given n initial pebbles and Alice starting, who wins the game? */

const alicePlays = (n) => {
  if (n === 0) return 'Bob wins!';
  else return bobPlays(n - 1);
};

const bobPlays = (n) => {
  if (n === 0) return 'Alice wins!';
  if (n % 2 === 0) return alicePlays(n - 2);
  else return alicePlays(n - 1);
};

module.exports = { alicePlays };
