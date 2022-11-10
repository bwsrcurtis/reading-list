let myLibrary = [];

const hobbit = new Book("The Hobbit", "JRR Tolkien", 220, true)
const hp = new Book("Harry Potter and the Sorcerer's Stone", "JK Rowling", 223, true)
const goneGirl = new Book("Gone Girl", "Gillian Flynn", 432, false)
const greatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true)
myLibrary.push(hobbit, hp, goneGirl, greatGatsby)

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
    myLibrary.push(newBook)
    title.value = ''
    author.value = ''
    pages.value = ''
    completed.checked = false
    makeLibrary()
}

function removeBook() {
    const removeButtons = document.querySelectorAll('.remove')
    for (let button of removeButtons) {
        button.addEventListener('click', function(e) {
            const index = e.target.dataset.id
            myLibrary.splice(index, 1)
            makeLibrary()
        })
    }
}

function toggleComplete() {
    const toggleButtons = document.querySelectorAll('.toggle');
    for (let toggle of toggleButtons) {
        toggle.addEventListener('click', function(e) {
            const index = e.target.dataset.id
            if (toggle.classList[0] == "complete") {
                toggle.classList = "incomplete toggle"
                toggle.textContent = "Incomplete"
                myLibrary[index].completed = false
            } else if (toggle.classList[0] == "incomplete") {
                toggle.classList = "complete toggle"
                toggle.textContent = "Complete"
                myLibrary[index].completed = true
            }
        })
    }
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
        const buttonDiv = document.createElement("div")
        const titleAuthDiv = document.createElement("div")
        card.className = "book-card"
        card.setAttribute('data-id', `${i}`)
        titleEl.className = "title"
        titleEl.textContent = `${book.title}`
        authorEl.className = "author"
        authorEl.textContent = `by ${book.author}`
        pagesEl.className = "pages"
        pagesEl.textContent = `${book.pages} Pages`
        if (book.complete == false) {
            completeEl.textContent = "Incomplete"
            completeEl.className = "incomplete toggle"
            completeEl.setAttribute('data-id', `${i}`)
            completeEl.onclick = toggleComplete
        } else if (book.complete == true) {
            completeEl.textContent = 'Complete'
            completeEl.className = "complete toggle"
            completeEl.setAttribute('data-id', `${i}`)
            completeEl.onclick = toggleComplete
        }
        removeEl.className = "remove"
        removeEl.textContent = "Remove"
        removeEl.setAttribute('data-id', `${i}`)
        removeEl.onclick = removeBook
        titleAuthDiv.className = "title-div"
        titleAuthDiv.append(titleEl, authorEl)
        buttonDiv.className = "button-div"
        buttonDiv.append(completeEl, removeEl)
        // titleEl.append(authorEl, pagesEl, completeEl, removeEl)
        card.append(titleAuthDiv, pagesEl, buttonDiv)
        cardCont.appendChild(card)
    })
}

makeLibrary();