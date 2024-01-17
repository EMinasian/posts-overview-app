import "./Modal.css";

export default function Modal({ visible, setVisible, children }) {

  return (
    visible && (
      <>
        <div className="modal-background" onClick={() => setVisible(false)}/>
        <dialog open={visible} className="modal-box">
          {children}
        </dialog>
      </>
    )
  );
}
