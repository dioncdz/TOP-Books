let myLibrary = [];

// CONSTRUCTOR
function Book(title, author, numPages, isRead) {
   this.title = title,
   this.author = author,
   this.numPages = numPages,
   this.isRead = isRead
   this.info = function() {
      return `${this.title} is a book by ${this.author}. It has a total of ${this.numPages} pages.`
   }
}

// FIRST BOOK
const book1 = new Book('Monk', 'Sharma', 3000, false);


function addBookToLibrary (input) {
   return myLibrary.push(input)
}

