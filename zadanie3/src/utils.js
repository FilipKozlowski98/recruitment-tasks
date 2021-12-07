export const fetchQuotes = (changeDatabase) => {
  fetch(
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      changeDatabase(data);
    });
};

export const drawNumber = (databaseLength) => {
  return Math.floor(Math.random() * (databaseLength - 1));
};
