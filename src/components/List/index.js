import { useContext } from "react"
import { QueryContext } from "../../context/query"

const List = () => {

    const {
        deleteItem,
        allList
    } = useContext(QueryContext)

    return (
        <div className="container px-5 pt-5">
            <div className="row">
                {
                    allList.map( e => {
                        return (
                            <div className="col-lg-6 mb-4" key={e.id}>
                                <div className="card">
                                    <div className="card-body book">
                                        <button type="button" className="btn-close float-end" onClick={() => deleteItem(e.id)}></button>
                                        <div className="p-3 float-start">
                                            <h4 className="fw-bold">{e.title}</h4>
                                            <p className="fw-bold author">{e.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List