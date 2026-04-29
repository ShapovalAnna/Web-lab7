export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="modal">
            <p>Ви впевнені?</p>
            <button onClick={onConfirm}>Так</button>
            <button onClick={onCancel}>Ні</button>
        </div>
    );
}