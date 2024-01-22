import { useNavigate } from "react-router-dom";
import "./Modal.css";

export default function Modal({ children }) {
  const navigate = useNavigate();

  return (
     (
      <>
        <div className="modal-background" onClick={() => navigate('..')}/>
        <dialog open={true} className="modal-box">
          {children}
        </dialog>
      </>
    )
  );
}
