import { useEffect, useState } from "react";
import { getInventory, deleteInventory } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import ConfirmModal from "../components/inventory/ConfirmModal";
import { useNavigate } from "react-router-dom";

export default function AdminInventory() {
    const [items, setItems] = useState([]);
    const [confirmId, setConfirmId] = useState(null);
    const navigate = useNavigate();

    const loadData = async () => {
        const data = await getInventory();
        setItems(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    //  відкриваємо модалку
    const handleDelete = (id) => {
        setConfirmId(id);
    };

    //  підтвердження
    const confirmDelete = async () => {
        await deleteInventory(confirmId);
        setConfirmId(null);
        loadData();
    };

    return (
        <div>

            {/* 🔝 Закріплена кнопка */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    background: "#16171d",
                    padding: "20px 0",
                    textAlign: "center",
                }}
            >
                <button
                    onClick={() => navigate("/create")}
                    style={{
                        background: "#3b82f6",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Add New item
                </button>
                <button
                    onClick={() => navigate("/gallery")}
                    style={{
                        marginLeft: "15px",
                        background: "#10b981",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Open Gallery
                </button>
            </div>

            {/*  Таблиця */}
            <InventoryTable items={items} onDelete={handleDelete} />

            {/*  МОДАЛКА */}
            {confirmId && (
                <ConfirmModal
                    onConfirm={confirmDelete}
                    onCancel={() => setConfirmId(null)}
                />
            )}
        </div>
    );
}