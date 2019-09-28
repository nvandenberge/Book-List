// 1 - Book Constructor: handles creating book object
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// 2 - UI Constructor: set of protoype methods to run functions like adding/removing books
function UI() {}

// Creating prototype function to add book to list
UI.prototype.addBookToList = function(book){            
    const list = document.getElementById('book-list');
// Create table element
    const row = document.createElement('tr');  
// insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">Delete</a></td>
    `;
    list.appendChild(row);
}

// Clears fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// 3 - Event Listeners
document.getElementById('book-form').addEventListener('submit', 
    function(e){
 // Get the values from the form
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value
        
// Instantiating book (creating new object with properties from Book)
            const book = new Book(title, author, isbn);
           
// Instantiate UI
        const ui = new UI();
            
// Add book to list
        ui.addBookToList(book);

//Clears the fields after submit
        ui.clearFields()

        e.preventDefault();
})