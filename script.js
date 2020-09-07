/**************************************
 * // ELEMENTS
 **************************************/
const inputs = document.querySelectorAll('input');
const addBookButtons = document.querySelectorAll('.add-book-btn');

let myLibrary = [];
let sortDirection = false;


// CONSTRUCTOR
function Book(title, author, numPages, isRead) {
   this.title = title,
   this.author = author,
   this.numPages = numPages,
   this.isRead = isRead
}

Book.prototype.info = function () {
   return `${this.title} is a book by ${this.author}. It has a total of ${this.numPages} pages.`
}

/**************************************
 * // FUNCTIONS
 **************************************/
function addBookToLibrary () {
   // TODO: GET BOOK INFO FROM USER
   let title = document.querySelector('#title').value;
   let author = document.querySelector('#author').value;
   let numPages = document.querySelector('#numPages').value;
   let isRead = document.querySelector('#isRead').value;

   // TODO: GET CURRENT LIST OF BOOKS 

   // TODO: ADD THE LATEST BOOK IN LIBRARY 

   // TODO: RETURN UPDATED LIST OF BOOKS
   console.log('Hello');
}

function displayBooks (books) {
   const libraryTable = document.querySelector('#library-data');
   let dataHTML = '';

   for(let book of books) {
      dataHTML += `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
      <td>${book.isRead}</td>
      <td><button class="delete-btn"><i class="far fa-trash-alt"></i></button></td>`
   }

   libraryTable.innerHTML = dataHTML;
}

function sortColumn(category) {
   const dataType = typeof myLibrary[0][category];

   sortDirection = !sortDirection;

   switch(dataType) {
      case 'number':
      sortNumberColumn(sortDirection, category)
      break;
   };

   displayBooks(myLibrary);
}

function sortNumberColumn(sort, columnName) {
   myLibrary = myLibrary.sort((a,b) => {
      return sort ? a[columnName] - b[columnName] : b[columnName] - a[columnName] ;
   });
}

/**************************************
 * // BOOK LIST
 **************************************/
// const book1 = new Book('Monk', 'Sharma', 3000, false);
// const book2 = new Book('Apple', 'Sharma', 2700, false);
// const book3 = new Book('Banana', 'Sharma', 2800, false);

// myLibrary.push(book1)
// myLibrary.push(book2)
// myLibrary.push(book3)

/**************************************
 * // EXECUTE
 **************************************/

//  displayBooks(myLibrary)
//  sortColumn('numPages')

 /**************************************
 * // EVENT LISTENERS
 **************************************/


addBookButtons.forEach(btn => {
   btn.addEventListener('click', addBookToLibrary);
})
