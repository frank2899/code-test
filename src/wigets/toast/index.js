import Toast from "react-bootstrap/Toast";

export const SimpleToast = (props) => {
  return (
    <Toast onClose={() => props.setShown({...props, status : false})} show={props.shown} delay={5000} autohide>
      <Toast.Header>
        <strong className='me-auto'>{props.title}</strong>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  );
};