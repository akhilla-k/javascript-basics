// ====== Library Book Tracker ======
const readline = require("readline-sync");
let books = []; // Create an empty array to store books

// Function to show the main menu
function showMenu() {
  let userChoice = readline.question(
    "Please enter your choice respectively : \n1. Add Book \n2. View All Books \n3. Search by Title \n4. Remove Book \n5. EXIT\n"
  );

  switch (userChoice) {
    case "1":
      addBook();
      break;
    case "2":
      viewBooks();
      break;
    case "3":
      searchBook();
      break;
    case "4":
      removeBook();
      break;
    case "5":
      console.log("Goodbye!");
      return;
    default:
      console.log("Invalid choice...please try again.");
  }

  let option = readline.question("Do you want to continue? YES/NO\n").toLowerCase();
  if (option === "yes") {
    return showMenu();
  } else {
    console.log("Goodbye!");
  }
}

// Function to add a book
function addBook() {
  let bookTitle = readline.question("Enter the book title: ").trim();
  let author = readline.question("Enter the author name: ").trim();
  if (author === "") {
    author = "Unknown";
  }

  let yearInput = readline.question("Enter the year of the book: ");
  let year = Number(yearInput);
  if (isNaN(year)) {
    year = null;
  }

  let bookObject = { title: bookTitle, author: author, year: year };
  books.push(bookObject);
  console.log("Book added!");
}

// Function to view all books
function viewBooks() {
  if (books.length === 0) {
    console.log("No books in the library.");
    return;
  }
  console.log("The current books are:");
  for (let i = 0; i < books.length; i++) {
    console.log(
      `${i + 1} : Title - ${books[i].title}, Author - ${books[i].author}, Year - ${books[i].year}`
    );
  }
}

// Function to search by title
function searchBook() {
  let search = readline.question("Enter the title of the book you want to search: ").toLowerCase();
  let found = false;

  for (let i = 0; i < books.length; i++) {
    if (search === books[i].title.toLowerCase()) {
      console.log(`Found: Title - ${books[i].title}, Author - ${books[i].author}, Year - ${books[i].year}`);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("The book is not in the library.");
  }
}

// Function to remove a book
function removeBook() {
  let remove = readline.question("Enter the title of the book you want to remove: ").toLowerCase();
  let found = false;

  for (let i = 0; i < books.length; i++) {
    if (remove === books[i].title.toLowerCase()) {
      books.splice(i, 1);
      console.log("Book removed from the library.");
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("Book not found.");
  }
}

// Start the app by showing the menu
showMenu();
