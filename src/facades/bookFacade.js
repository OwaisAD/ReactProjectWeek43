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

const handleHttpErrors = (res) => {
    if (!res.ok) {
        return Promise.reject({
            status: res.status,
            fullError: res.json()
        })
    }
    return res.json()
}

const getAllBooks = () => {
    return fetch(`http://localhost:4000/books`)
        .then(handleHttpErrors)
}

const getBookById = (id) => {
    return fetch(`http://localhost:4000/books/${id}`)
        .then(handleHttpErrors)
}

const createBook = (user) => {
    const options = makeOptions(`POST`, user)
    return fetch(`http://localhost:4000/books`, options)
        .then(handleHttpErrors)
}

const updateBook = (id, user) => {
    const options = makeOptions(`PUT`, user)
    return fetch(`http://localhost:4000/books/${id}`, options)
        .then(handleHttpErrors)
}

const deleteBook = (id) => {
    const options = makeOptions(`DELETE`)
    return fetch(`http://localhost:4000/books/${id}`, options)
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