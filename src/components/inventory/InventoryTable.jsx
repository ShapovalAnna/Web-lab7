import { useNavigate } from "react-router-dom";

export default function InventoryTable({ items, onDelete }) {
    const navigate = useNavigate();

    if (!items.length) {
        return <p style={{ textAlign: "center" }}>No Items</p>;
    }

    return (
        <div style={{ width: "80%", margin: "40px auto" }}>
            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#d1d5db",
                        padding: "20px",
                        borderRadius: "16px",
                        marginBottom: "20px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    }}
                >
                    {/* Фото */}
                    <div style={{ width: "120px" }}>
                        {item.photo ? (
                            <img
                                src={item.photo}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: "100%",
                                    height: "80px",
                                    background: "black",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    borderRadius: "10px",
                                }}
                            >
                                no image
                            </div>
                        )}
                    </div>

                    {/* Назва */}
                    <div
                        style={{
                            flex: 1,
                            textAlign: "center",
                            color: "#000",
                            fontSize: "18px",
                            fontWeight: "500",
                        }}
                    >
                        {item.inventory_name}
                    </div>

                    {/* Кнопки */}
                    <div style={{ display: "flex", gap: "12px" }}>
                        <button
                            onClick={() => navigate(`/details/${item.id}`)}
                            style={readBtn}
                            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                            onMouseOut={(e) => (e.target.style.opacity = "1")}
                        >
                            read
                        </button>

                        <button
                            onClick={() => navigate(`/edit/${item.id}`)}
                            style={editBtn}
                            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                            onMouseOut={(e) => (e.target.style.opacity = "1")}
                        >
                            edit
                        </button>

                        <button
                            onClick={() => onDelete(item.id)}
                            style={deleteBtn}
                            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                            onMouseOut={(e) => (e.target.style.opacity = "1")}
                        >
                            delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

// 🔧 БАЗА ДЛЯ КНОПОК
const baseBtn = {
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.2s",
};

// READ
const readBtn = {
    ...baseBtn,
    background: "#92b1e3",
};

//  EDIT
const editBtn = {
    ...baseBtn,
    background: "#5e97e3",
};

// DELETE
const deleteBtn = {
    ...baseBtn,
    background: "#f66a6a",
};