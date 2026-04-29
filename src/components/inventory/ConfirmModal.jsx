export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div style={overlay}>
            <div style={modal}>
                <p style={text}>Are you sure you want to delete this?</p>

                <div style={actions}>
                    <button onClick={onConfirm} style={confirmBtn}>
                        Yes
                    </button>

                    <button onClick={onCancel} style={cancelBtn}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}



const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modal = {
    background: "#d1d5db",
    padding: "30px",
    borderRadius: "16px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
};

const text = {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#000",
};

const actions = {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
};

const confirmBtn = {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
};

const cancelBtn = {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#6b7280",
    color: "white",
    cursor: "pointer",
};