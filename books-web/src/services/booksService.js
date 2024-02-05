import http from './BaseService';

export const getBooks = () => http.get('/books');

export const getLatestBooks = () => http.get('/books/latest');

export const getBookDetail = (id) => http.get(`/books/${id}`)

export const deleteBook = (id) => http.delete(`/books/${id}`)

export const createBook = (data) => http.post('/books', data)