let myLibrary = [];

function Book(title, author, pages, complete) {
    this.title = title
    this.author = author
    this.pages = pages
    this.complete = complete
    this.info = function () {
        bookInfo = `${title}, ${author}, ${pages} pages, ${complete}`
        return bookInfo
    }
}

function addBook() {

}