export default function AreYouSure({ user, toggleAreYouSure, onConfirm }) {
  return (
    <div className="modal is-active is-clipped">
      <div
        className="modal-background"
        onClick={() => toggleAreYouSure(false)}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm action</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleAreYouSure(false)}
          ></button>
        </header>
        <section className="modal-card-body">
          Do you want to delete <b>{user.name}</b>?
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-danger"
            onClick={() => onConfirm(user.id)}
          >
            Delete user
          </button>
          <button className="button" onClick={() => toggleAreYouSure(false)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
