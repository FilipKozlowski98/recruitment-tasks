// main elements
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPriority = document.querySelector("#bookPriority");
const bookCategory = document.querySelector("#bookCategory");
const submitButton = document.querySelector("#submitButton");
const bookTable = document.querySelector(".bookTable");

// validation elements
const titleVer = document.querySelector(".titleVer");
const authorVer = document.querySelector(".authorVer");
const priorityVer = document.querySelector(".priorityVer");
const categoryVer = document.querySelector(".categoryVer");

//validation colors
bookTitle.addEventListener("input", () => {
  if (bookTitle.value.length > 0) {
    titleVer.classList.replace("invalid", "valid");
  } else {
    titleVer.classList.replace("valid", "invalid");
  }
});
bookAuthor.addEventListener("input", () => {
  if (bookAuthor.value.length > 2) {
    authorVer.classList.replace("invalid", "valid");
  } else {
    authorVer.classList.replace("valid", "invalid");
  }
});
bookPriority.addEventListener("input", () => {
  if (bookPriority.value !== "") {
    priorityVer.classList.replace("invalid", "valid");
  } else {
    priorityVer.classList.replace("valid", "invalid");
  }
});
bookCategory.addEventListener("input", () => {
  if (bookCategory.value !== "") {
    categoryVer.classList.replace("invalid", "valid");
  } else {
    categoryVer.classList.replace("valid", "invalid");
  }
});

// main functions
function validate() {
  let validation = true;
  if (bookTitle.value.length < 1) {
    validation = false;
  }
  if (bookAuthor.value.length < 3) {
    validation = false;
  }
  if (bookPriority.value === "") {
    validation = false;
  }
  if (bookCategory.value === "") {
    validation = false;
  }
  return validation;
}

function clearPage() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPriority.value = "";
  bookCategory.value = "";
  titleVer.classList.replace("valid", "invalid");
  authorVer.classList.replace("valid", "invalid");
  priorityVer.classList.replace("valid", "invalid");
  categoryVer.classList.replace("valid", "invalid");
}

function updateTable(title, author, priority, category) {
  let oneBook = document.createElement("tr");
  let oneTitle = document.createElement("td");
  oneTitle.innerHTML = title;
  let oneAuthor = document.createElement("td");
  oneAuthor.innerHTML = author;
  let onePriority = document.createElement("td");
  onePriority.innerHTML = priority;
  let oneCategory = document.createElement("td");
  oneCategory.innerHTML = category;
  oneBook.append(oneTitle, oneAuthor, onePriority, oneCategory);
  bookTable.append(oneBook);
}

function renderTable() {
  if (localStorage.getItem("booksList")) {
    let list = JSON.parse(localStorage.getItem("booksList"));
    list.forEach((book) => {
      updateTable(book.title, book.author, book.priority, book.category);
    });
  }
}

function addBook(event) {
  event.preventDefault();
  if (validate() === false) {
    return;
  }
  if (localStorage.getItem("booksList") === null) {
    localStorage.setItem(
      "booksList",
      JSON.stringify([
        {
          title: bookTitle.value,
          author: bookAuthor.value,
          priority: bookPriority.value,
          category: bookCategory.value,
        },
      ])
    );
  } else {
    let list = JSON.parse(localStorage.getItem("booksList"));
    list.push({
      title: bookTitle.value,
      author: bookAuthor.value,
      priority: bookPriority.value,
      category: bookCategory.value,
    });
    localStorage.setItem("booksList", JSON.stringify(list));
  }
  updateTable(
    bookTitle.value,
    bookAuthor.value,
    bookPriority.value,
    bookCategory.value
  );
  clearPage();
}

submitButton.addEventListener("click", addBook);

renderTable();
