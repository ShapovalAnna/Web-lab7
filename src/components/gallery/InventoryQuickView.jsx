export default function InventoryQuickView({ item, onClose }) {
    if (!item) return null;

    return (
        <div style={overlay} onClick={onClose}>
            <div style={modal} onClick={(e) => e.stopPropagation()}>

                <img src={item.photo} style={img} />

                <h2 style={title}>
                    {item.inventory_name}
                </h2>

                <p style={description}>
                    {item.description || "No description"}
                </p>

                <button onClick={onClose} style={closeBtn}>
                    Close
                </button>
            </div>
        </div>
    );
}

const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modal = {
    background: "#d1d5db",
    padding: "20px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",

    overflow: "hidden",
};

const img = {
    width: "80%",
    height: "250px",
    objectFit: "cover",
    marginBottom: "10px",
};

const title = {
    color: "#000",
    marginBottom: "10px",
};

const description = {
    color: "#000",
    fontSize: "14px",
    padding: "10px",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",

    maxHeight: "120px",
    overflowY: "auto",

    background: "#9ca3af",
    borderRadius: "10px",
};

const closeBtn = {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
};