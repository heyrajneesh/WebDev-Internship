const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];
let nextId = 1;

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Add a book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ error: 'Book not found.' });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) return res.status(404).json({ error: 'Book not found.' });

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
