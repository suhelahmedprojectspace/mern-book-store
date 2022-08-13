import express from 'express'
import { addBook, Deletebook, getAllBooks, getBookById, SearchBar, updateDetails } from '../controllers/BookCon.js'
const Bookrouter = express.Router()
Bookrouter.get('/', getAllBooks)
Bookrouter.get('/:id', getBookById)
Bookrouter.post('/', addBook)
Bookrouter.get('/search/:key', SearchBar)
Bookrouter.put('/:id', updateDetails)
Bookrouter.delete('/:id', Deletebook)
export default Bookrouter