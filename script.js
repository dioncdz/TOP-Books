// TODO: UPDATE UI
// TODO: MAKE READ STATUS A CHECKBOX
// TODO: APPLY LOCAL STORAGE
// TODO: DELETE ALL FORM VALUES ---addBookToLibrary()
// TODO: CANCEL / DELETE INPUT VALUES  ---addBookToLibrary()

/**************************************
 * // ELEMENTS
 **************************************/
const inputs = document.querySelectorAll('input');
const addBookButtons = document.querySelectorAll('.add-book-btn');

let myLibrary = [];
let sortDirection = false;

// BOOK CONSTRUCTOR
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
   if(this.id === 'submit') {
      // GET BOOK INFO FROM USER
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let numPages = document.querySelector('#numPages').value;
      let isRead = document.querySelector('#isRead').checked;
   
      // STORE DETAILS IN NEW BOOK OBJECT
      const newBook = new Book(title, author, numPages, isRead)
   
      // ADD THE LATEST BOOK IN LIBRARY 
      myLibrary.push(newBook);
   
      // TODO: DELETE ALL FORM VALUES
   
      // TODO: UPDATE UI
      // const libraryTable = document.querySelector('#library-data');
      // const createRow = document.createElement('tr');

      // const dataTitle = document.createElement('td');
      // dataTitle.innerHTML = `${title}`;

      // const dataAuthor = document.createElement('td');
      // dataAuthor.innerHTML = `${author}`;

      // const dataNumPages = document.createElement('td')
      // dataNumPages.innerHTML = `${numPages}`;

      // const dataIsRead = document.createElement('td')
      // dataIsRead.innerHTML = `${isRead}`;

      // const dataRemove = document.createElement('td')
      // dataRemove.innerHTML = `<button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;
      
      // libraryTable.appendChild(createRow);
      // const tableRow = document.querySelector('#library-data tr:last-child')
      // tableRow.appendChild(dataTitle)
      // tableRow.appendChild(dataAuthor)
      // tableRow.appendChild(dataNumPages)
      // tableRow.appendChild(dataIsRead)
      // tableRow.appendChild(dataRemove)

      displayBooks(myLibrary)

      const deleteButtons = document.querySelectorAll('.delete-btn')

      deleteButtons.forEach(btn => {
         btn.addEventListener('click', deleteBook);
      })

   } 
   
   else {
      // TODO: CANCEL / DELETE INPUT VALUES
      console.dir(this);
   }

}

function deleteBook() {
   let row = this.parentNode.parentNode;
   row.parentNode.removeChild(row)
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

// sortColumn('numPages')

/**************************************
 * // EVENT LISTENERS
 **************************************/
addBookButtons.forEach(btn => {
   btn.addEventListener('click', addBookToLibrary);
})




