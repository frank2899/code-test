import { createContext, useState } from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer';
import { SimpleToast } from '../wigets/toast';

const ToastContext = createContext()

const ToastContextProvider = (props) => {

    const [triggerSimpleToast, setTriggerSimpleToast] = useState({
        status: false,
        title : null,
        message : null
    })

    return (
        <ToastContext.Provider value={{
            setTriggerSimpleToast
        }}>
            <ToastContainer className="p-3" position="top-end">
                <SimpleToast
                    title={triggerSimpleToast.title}
                    message={triggerSimpleToast.message}
                    shown={triggerSimpleToast?.status}
                    setShown={setTriggerSimpleToast}
                />
            </ToastContainer>
            {props.children}
        </ToastContext.Provider>
    )
}

export { ToastContext, ToastContextProvider }