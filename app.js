// Book: Represnts a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [{
                title: 'Book One',
                author: 'Ackim Brian',
                isbn: '124536'
            },
            {
                title: 'Book Two',
                author: 'Eliana Phiri',
                isbn: '123456'
            },
            {
                title: 'Book Four',
                author: 'Chi Babe',
                isbn: '654321'
            }
        ];

        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
        list.appendChild(row)
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Store Class: Handles Storage

//Event Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();

    //Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate fields
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
    } else {
        // Instatiate book
        const book = new Book(title, author, isbn);

        //Add Book to UI
        UI.addBookToList(book);

        //Clear field after adding a book
        UI.clearFields();

    }
});

//Remove a Book
document.getElementById('book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});