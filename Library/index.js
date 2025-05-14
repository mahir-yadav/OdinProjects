let books = document.getElementsByClassName("main");
const addBookBtn = document.querySelector(".addbook");
const dialog = document.getElementById("bookform");
const confirmBtn = document.getElementById("confirmBtn");

let library = [];

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookNumOfPages").value;
    const readIt = document.getElementById("readIt").checked;

    const newBook = {
        id: crypto.randomUUID(),
        title,
        author,
        numOfPages: pages,
        status: readIt ? "Read" : "Unread"
    };

    myLibrary.push(newBook);
    books[0].innerHTML = "";
    showLibrary(myLibrary);
    dialog.close();
});

const myLibrary = []

function book(title, author, numOfPages, status, id) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.status = status;
    this.id = id;
}
function addBookToLibrary(title, author, numOfPages, status) {
    let id = crypto.randomUUID();
    newBook = new book(title, author, numOfPages, status, id);
    myLibrary.push(newBook);

}
function showLibrary(library) {
    library.forEach(book => {
        let booknew = document.createElement("div")
        booknew.setAttribute("class", "card");
        books[0].appendChild(booknew);
        let content = document.createElement("div");
        content.innerHTML = `
            <div class="card-content">Title: ${book.title}</div>
            <div class="card-content">Author: ${book.author}</div>
            <div class="card-content">Number of pages: ${book.numOfPages}</div>
            <div class="card-content">Status: ${book.status}</div>
        `;
        content.setAttribute("class", "content");
        booknew.appendChild(content);
        let buttons = document.createElement("div");
        buttons.setAttribute("class", "card-btn");
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("book-id", book.id);
        deleteButton.textContent = "Delete";

        let markedButton = document.createElement("button");
        markedButton.setAttribute("type", "button");
        markedButton.setAttribute("book-id", book.id);
        if (book.status == "Read") {
            markedButton.textContent = "Mark as Unread";
        } else {
            markedButton.textContent = "Mark as Read";
        }
        buttons.appendChild(deleteButton);
        buttons.appendChild(markedButton);
        booknew.appendChild(buttons);
        deleteButton.addEventListener("click", (e) => {
            const bookId = e.target.getAttribute("book-id");
            // console.log(bookId);
            const ind = library.findIndex(ele => ele.id == bookId);
            library.splice(ind, 1);
            books[0].innerHTML = "";
            showLibrary(library);
        });
        markedButton.addEventListener("click", (e) => {
            const bookId = e.target.getAttribute("book-id");
            const ind = library.findIndex(ele => ele.id == bookId);
            if (library[ind].status == "Read") {
                library[ind].status = "Unread";
            } else {
                library[ind].status = "Read";
            }
            books[0].innerHTML = "";
            showLibrary(library);
        });



    });
}
addBookToLibrary("Harry Potter", "J. K. Rowling", "109", "Unread");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1178", "Urnead");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281", "Unread");
addBookToLibrary("1984", "George Orwell", "328", "Read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "432", "Unread");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "277", "Unread");
addBookToLibrary("The Da Vinci Code", "Dan Brown", "489", "Unread");
addBookToLibrary(" The Alchemist", "Paulo Coelho", "208", "Read");
showLibrary(myLibrary);