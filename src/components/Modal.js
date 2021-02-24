export default function Modal({ children, title, handleClose }) {
  return (
    <div className="modal is-clipped is-active">
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content">
        <div className="modal-card">
          <header className="modal-card-head">
            <h4 className="subtitle">{title}</h4>
          </header>
          <section className="modal-card-body">{children}</section>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClose}
      ></button>
    </div>
  );
}
