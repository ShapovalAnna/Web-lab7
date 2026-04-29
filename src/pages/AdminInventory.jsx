import { useEffect, useState } from "react";
import { getInventory, deleteInventory } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import { useNavigate } from "react-router-dom";

export default function AdminInventory() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const loadData = async () => {
        const data = await getInventory();
        setItems(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this?")) return;

        await deleteInventory(id);
        loadData();
    };

    return (
        <div>
        <div
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                background: "#16171d",
                padding: "20px 0",
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
        </div>

            <InventoryTable items={items} onDelete={handleDelete} />
        </div>
    );
}