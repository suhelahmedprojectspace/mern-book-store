import Student from "../models/Book.js";

export const getAllBooks = async (req, res) => {
    try {
        const book = await Student.find()
        res.status(200).json({ book })
    }
    catch (error) {
        res.status(404).json({ messagea: error })
    }
}
export const getBookById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Student.findById(id)
        res.status(200).json({ response })
    }
    catch (error) {
        res.status(404).json({ error })
    }

}
export const addBook = async (req, res) => {
    const { Bookname, Bookprice, author, availability, BookImage, Description } = req.body
    let books;
    books = new Student({
        Bookname,
        Bookprice,
        author,
        availability,
        BookImage,
        Description
    })
    try {
        await books.save()
    }
    catch (error) {
        res.status(404).json({ error })
    }
    if (!books) {
        res.status(404).json({ message: 'cannot added' })
    }
    else {
        res.status(200).json({ books })
    }

}
export const updateDetails = async (req, res) => {
    const id = req.params.id
    const { Bookname, Bookprice, author, availability, BookImage, Description } = req.body
    let books;
    books = await Student.findByIdAndUpdate(id, { Bookname, Bookprice, author, availability, BookImage, Description })
    try {
        await books.save()
        res.status(200).json({ books })
    }
    catch (error) {
        res.status(404).json({ error })
    }

}


export const Deletebook = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Student.findByIdAndRemove(id)
        res.status(200).json({ response })

    }
    catch (error) {
        res.status(404).json({ error })
    }
}
export const SearchBar = async (req, res) => {
    const id = req.params.key
    try {
        const response = await Student.find({
            "$or": [
                { "Bookname": { $regex: id } }
            ]
        })
        res.status(200).json({ response })
    }
    catch (error) {
        res.status(404).json({ error })
    }
}