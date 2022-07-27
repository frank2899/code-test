import { createContext, useContext, useEffect, useState } from 'react'
import { ToastContext } from './toast'
import DB from '../utils/query'

const QueryContext = createContext()

const QueryContextProvider = (props) => {

    const { setTriggerSimpleToast } = useContext(ToastContext)

    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [allList, setAllList] = useState([])

    const addItem = async () => {
        if(!bookTitle || !bookAuthor) return setTriggerSimpleToast({ title : "Missing fields", message : "Title and Author is required.", status : true })

        await DB.addList(bookTitle, bookAuthor)

        setTriggerSimpleToast({ title : "New item added", message : bookTitle+" is added in list.", status : true })
        setBookTitle("")
        setBookAuthor("")
        getAll()
    }

    const deleteItem = async (id) => {
        setTriggerSimpleToast({ title : "Deleted", message : "item is deleted", status : true })
        await DB.deleteList(id)
        getAll()
    }

    const getAll = async () => {
        const entry = await DB.getAllList()
        setAllList(entry.list)
    }

    useEffect(() => {
        getAll()
    },[])

    return (
        <QueryContext.Provider value={{
            addItem,
            deleteItem,
            setBookAuthor,
            setBookTitle,
            allList,
            bookTitle,
            bookAuthor
        }}>
            {props.children}
        </QueryContext.Provider>
    )
}

export { QueryContext, QueryContextProvider }