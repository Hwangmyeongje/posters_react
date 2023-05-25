import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
//div요소는 배경을 렌더링하는데 사용
//div가 배경
//children 예약된 속성 이름
export default Modal;
