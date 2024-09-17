function oldBooks(input) {
  let index = 0;
  let favoriteBook = input[index];
  index++;
  let checkedBooks = 0;
  let searchedBook = input[index];
  index++;

  while (favoriteBook != searchedBook) {
    if (searchedBook === 'No More Books') {
      break;
    }
    searchedBook = input[index];
    index++;
    checkedBooks++;
  }
  if (searchedBook === 'No More Books') {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBooks} books.`);
  } else {
    console.log(`You checked ${checkedBooks} books and found it.`);
  }
}

oldBooks([
  'The Spot',
  'Hunger Games',
  'Harry Potter',
  'Torronto',
  'Spotify',
  'No More Books',
]);
