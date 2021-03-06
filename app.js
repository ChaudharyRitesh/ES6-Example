// Book constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');
    // create a element
    const row = document.createElement('tr');

    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "delete">X</a></td>
        `;
    list.appendChild(row);
}

// clear
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

 // event listeners

 document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    
    const book = new Book(title, author, isbn);

    // instantiate ui objects

    const ui = new UI();
    //add book to list
    ui.addBooktoList(book);

    //clear fields
    ui.clearFields();

    e.preventDefault()
 });
