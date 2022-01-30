// generate random ints within a range
function tryTo(description, callback) {
  for (let timeout = 1000; timeout > 0; timeout--) {
    if (callback()) {
      return;
    }
  }
  throw "Timeout while trying to " + description;
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fisher-yates shuffle - rand swap for each el in an arr for perfect shuffle :)
function shuffle(arr) {
  let temp, r;
  for (let i = 1; i < arr.length; i++) {
    r = randomRange(0, i);
    temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
  return arr;
}
