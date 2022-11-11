import { Fragment } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ onOpen, onClose, children }) => {

    if (!onOpen) return null;

    return ReactDOM.createPortal(
        <Fragment>
            <div className={classes.overlay}></div>
            <div className={classes.modal_container}>
                {children}
                <button className={classes.modal_button} onClick={onClose}>Close</button>
            </div>
        </Fragment>, document.getElementById('portal')
    )
}

export default Modal