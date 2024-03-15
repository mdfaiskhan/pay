const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');
const modal = document.getElementById('modal');
const editForm = document.getElementById('editForm');
const editTitleInput = document.getElementById('editTitle');
const editAuthorInput = document.getElementById('editAuthor');
const editPagesInput = document.getElementById('editPages');

let books = [];
let editIndex = null;

// Function to render books
function renderBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${book.title} by ${book.author}, ${book.pages} pages</span>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to add a book
function addBook(title, author, pages) {
    books.push({ title, author, pages });
    renderBooks();
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Function to display edit modal
function displayEditModal(index) {
    const book = books[index];
    editIndex = index;
    editTitleInput.value = book.title;
    editAuthorInput.value = book.author;
    editPagesInput.value = book.pages;
    modal.style.display = 'block';
}

// Function to save edited book
function saveEditedBook(title, author, pages) {
    books[editIndex] = { title, author, pages };
    renderBooks();
    closeModal();
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    editIndex = null;
    editTitleInput.value = '';
    editAuthorInput.value = '';
    editPagesInput.value = '';
}

// Event listener for form submission
bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = bookForm.title.value.trim();
    const author = bookForm.author.value.trim();
    const pages = parseInt(bookForm.pages.value.trim(), 10);
    if (title && author && !isNaN(pages)) {
        addBook(title, author, pages);
        bookForm.reset();
    }
});

// Event delegation for delete and edit buttons
bookList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const index = event.target.getAttribute('data-index');
        deleteBook(index);
    } else if (event.target.classList.contains('edit-btn')) {
        const index = event.target.getAttribute('data-index');
        displayEditModal(index);
    }
});

// Event listener for closing modal
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Event listener for closing modal with close button
document.querySelector('.close').addEventListener('click', closeModal);

// Event listener for editing form submission
editForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = editTitleInput.value.trim();
    const author = editAuthorInput.value.trim();
    const pages = parseInt(editPagesInput.value.trim(), 10);
    if (title && author && !isNaN(pages)) {
        saveEditedBook(title, author, pages);
        closeModal();
    }
});
