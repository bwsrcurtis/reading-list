let myLibrary = [];

function Book(title, author, pages, complete) {
    this.title = title
    this.author = author
    this.pages = pages
    this.complete = complete
}

function addBook() {
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const completed = document.querySelector('#completed')
    if (!title.value | !author.value | !pages.value) {
        alert("Please Enter Title, Author, and Pages Before Submitting")
        return
    }
    const titleText = title.value
    const authorText = author.value
    const pagesNum = pages.value
    const completedBool = completed.checked
    const newBook = new Book(titleText, authorText, pagesNum, completedBool)
    console.log(newBook)
    myLibrary.push(newBook)
    title.value = ''
    author.value = ''
    pages.value = ''
    completed.checked = false
    makeLibrary()
}

function makeLibrary() {
    const cardCont = document.querySelector('.card-container')

    cardCont.innerHTML = ''
    myLibrary.map((book, i) => {
        const card = document.createElement('div')
        const titleEl = document.createElement("h2")
        const authorEl = document.createElement("h3")
        const pagesEl = document.createElement("p")
        const completeEl = document.createElement("button")
        const removeEl = document.createElement("button")
        card.className = "book-card"
        card.setAttribute('data-id', `${i}`)
        titleEl.className = "title"
        titleEl.textContent = `${book.title}`
        authorEl.className = "author"
        authorEl.textContent = `${book.author}`
        pagesEl.className = "pages"
        pagesEl.textContent = `${book.pages} Pages`
        if (book.complete == false) {
            completeEl.textContent = "Incomplete"
            completeEl.className = "incomplete"
        } else if (book.complete == true) {
            completeEl.textContent = 'Complete'
            completeEl.className = "complete"
        }
        removeEl.className = "remove"
        removeEl.textContent = "Remove"
        // titleEl.append(authorEl, pagesEl, completeEl, removeEl)
        card.append(titleEl, authorEl, pagesEl, completeEl, removeEl)
        cardCont.appendChild(card)
    })
}
