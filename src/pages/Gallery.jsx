import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInventory } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Gallery() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getInventory().then(setItems);
    }, []);

    return (
        <div>

            {/*  HEADER */}
            <div style={topBar}>
                {/* ЛІВА КНОПКА */}
                <button
                    onClick={() => navigate("/")}
                    style={tableBtn}
                >
                   Content Chart
                </button>
                {/*  ГАЛЕРЕЯ */}
                <h1 style={title}>Gallery</h1>
                {/* ПРАВА ЧАСТИНА */}
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        onClick={() => navigate("/favorites")}
                        style={favBtn}
                    >
                        Favorites
                    </button>
                </div>

            </div>



            <InventoryGallery items={items} />
        </div>
    );
}

//
//  СТИЛІ
//

const topBar = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#16171d",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const tableBtn = {
    background: "#3b82f6",
    color: "white",
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
};

const title = {
    textAlign: "center",
    color: "white",
    marginTop: "20px",
};
const favBtn = {
    background: "#ec4899",
    color: "white",
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
};
