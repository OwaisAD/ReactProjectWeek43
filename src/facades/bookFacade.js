const makeOptions = (method, body) => {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body)
    }
    return opts
}

const handleHttpErrors = async (res) => {
    if (!res.ok) {
        return await Promise.reject({
            status: res.status,
            fullError: res.json()
        })
    }
    return await res.json()
}

const getAllBooks = async () => {
    return await fetch(`http://localhost:4000/books`)
        .then(handleHttpErrors)
}

const getBookById = async (id) => {
    return await fetch(`http://localhost:4000/books/${id}`)
        .then(handleHttpErrors)
}

const createBook = async (book) => {
    const options = makeOptions(`POST`, book)
    return await fetch(`http://localhost:4000/books`, options)
        .then(handleHttpErrors)
}

const updateBook = async (id, book) => {
    const options = makeOptions(`PUT`, book)
    return await fetch(`http://localhost:4000/books/${id}`, options)
        .then(handleHttpErrors)
}

const deleteBook = async (id) => {
    const options = makeOptions(`DELETE`)
    return await fetch(`http://localhost:4000/books/${id}`, options)
        .then(handleHttpErrors)
}

// we make a userFacade object consisting of all our methods
// we don't need to write properties and names both, because their names are the same
const bookFacade = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
}

//then we export the object for use elsewhere
export default bookFacade