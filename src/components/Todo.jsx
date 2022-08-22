// New Functions should start with a capital
// Props are accepted as a parameter
// Inside the return HTML block, everything is treated as HTML Elements or plain text
// When passing functions inside components we dont have (), because we dont execute the function when the line is read, but only when button is clicked
// useState() is a React Hook, and can only be called directly in react component functions and custom hooks
// useState() returns an array with two elements, first element is current state snapshot (false in this example), second element is a function that allows you to change first element value
// Our own components do not have built in props
// Props are important to build reusable components, state is important for changing what we see on the screen dynamically

import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            {/* <span>A Span</span> */}
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>} 
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    );
}

export default Todo;