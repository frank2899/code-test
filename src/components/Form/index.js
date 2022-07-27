import { useContext } from "react"
import { QueryContext } from "../../context/query"

const Form = () => {

    const {
        addItem,
        setBookAuthor,
        setBookTitle,
        bookTitle,
        bookAuthor
    } = useContext( QueryContext )

    return (
        <div className="container p-5">
            <div className="mb-3 pt-3">
                <input type="text" className="form-control" id="title" placeholder="Book Title" onChange={(e) => setBookTitle(e.target.value)} value={bookTitle}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="author" placeholder="Author" onChange={(e) => setBookAuthor(e.target.value)} value={bookAuthor}/>
            </div>

            <div className="position-absolute top-left">
                <button type="submit" className="btn btn-light text-white btn-create rounded-pill d-block w-100 mb-3 px-4 py-2" onClick={addItem}>Create</button>
            </div>
        </div>
    )
}

export default Form