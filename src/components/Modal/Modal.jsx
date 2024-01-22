import "./Modal.css";

export default function Modal({ visible, setVisible, children }) {

  return (
     (
      <>
        <div className="modal-background" onClick={() => setVisible(false)}/>
        <dialog open={true} className="modal-box">
          {children}
        </dialog>
      </>
    )
  );
}
