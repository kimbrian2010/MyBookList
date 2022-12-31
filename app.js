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
                title: 'Book Three',
                author: 'Mbeza Zulu',
                isbn: '112233'
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

    // Instatiate book
    const book = new Book(title, author, isbn);

    console.log(book)


});



//Remove a Book