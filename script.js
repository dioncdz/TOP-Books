// TODO: UPDATE UI
// TODO: APPLY LOCAL STORAGE

/**************************************
 * // ELEMENTS
 **************************************/
const inputs = document.querySelectorAll('input');
const addBookButtons = document.querySelectorAll('.add-book-btn');

let myLibrary = JSON.parse(localStorage.getItem('items')) || [];
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
function addBookToLibrary (e) {
   e.preventDefault();
   // Prevents the page from refreshing after submitting form

   if(this.id === 'submit') {
      
      // GET BOOK INFO FROM USER
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let numPages = document.querySelector('#numPages').value;
      let isRead = document.querySelector('#isRead').checked;
   
      // TODO: RETURN IF NO TITLE OR AUTHOR --- UNCOMMENT ONCE PROJECT FINISHED
      // if (title === '' || author === '') {
      //    alert('Please indicate Book title and Author')
      //    return;
      // }

      // STORE DETAILS IN NEW BOOK OBJECT
      const newBook = new Book(title, author, numPages, isRead)
   
      // ADD THE LATEST BOOK IN LIBRARY 
      myLibrary.push(newBook);
      localStorage.setItem('items', JSON.stringify(myLibrary));
   
      // TODO: UPDATE UI
      displayBooks(myLibrary)

      const deleteButtons = document.querySelectorAll('.delete-btn')

      deleteButtons.forEach(btn => {
         btn.addEventListener('click', deleteBook);
      })

      // DELETE ALL FORM VALUES
      clearInput();
   } 
   
   else {
      //CANCEL / DELETE INPUT VALUES
      clearInput();
   }

}

function deleteBook() {
   // Delete row from DOM
   let row = this.parentNode.parentNode;
   row.parentNode.removeChild(row);

   // Delete from myLibrary array
   let bookIndex = this.parentNode.parentNode.rowIndex - 1;
   myLibrary.splice(bookIndex, 1)
   localStorage.setItem('items', JSON.stringify(myLibrary));
}

function displayBooks (books) {
   const libraryTable = document.querySelector('#library-data');

   let dataHTML = '';

   for(let book of books) {
      let bool = Boolean(book.isRead)

      dataHTML += `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
      <td><input type="checkbox" id="isRead" ${bool ? 'checked' : ''} /></td>
      <td><button class="delete-btn"><i class="far fa-trash-alt"></i></button></td>`
   }

   libraryTable.innerHTML = dataHTML;
}

function clearInput() {
   Array.from(inputs)[0].value = '';
   Array.from(inputs)[1].value = '';
   Array.from(inputs)[2].value = '';
   Array.from(inputs)[3].checked = false;
}

// function sortColumn(category) {
//    const dataType = typeof myLibrary[0][category];

//    sortDirection = !sortDirection;

//    switch(dataType) {
//       case 'number':
//       sortNumberColumn(sortDirection, category)
//       break;
//    };

//    displayBooks(myLibrary);
// }

// function sortNumberColumn(sort, columnName) {
//    myLibrary = myLibrary.sort((a,b) => {
//       return sort ? a[columnName] - b[columnName] : b[columnName] - a[columnName] ;
//    });
// }

// sortColumn('numPages')

displayBooks(myLibrary);

/**************************************
 * // EVENT LISTENERS
 **************************************/
addBookButtons.forEach(btn => {
   btn.addEventListener('click', addBookToLibrary);
})








