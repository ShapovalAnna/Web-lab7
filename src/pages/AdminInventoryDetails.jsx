import { useEffect, useState } from "react";
import { getInventoryById } from "../services/inventoryApi";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminInventoryDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState(null);

    useEffect(() => {
        getInventoryById(id).then(setItem);
    }, [id]);

    if (!item) return <p style={{ textAlign: "center" }}>Loading...</p>;

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>

            {/* 🔙 Назад */}
            <button onClick={() => navigate("/")} style={backBtn}>
                ←  Go back
            </button>

            {/* 📦 КАРТОЧКА */}
            <div style={card}>

                {/* 📸 ФОТО */}
                <div style={photoBox}>
                    {item.photo ? (
                        <img src={item.photo} style={imgStyle} />
                    ) : (
                        <div style={noPhoto}>photo</div>
                    )}
                </div>

                {/* 📝 ПРАВА ЧАСТИНА */}
                <div style={rightSide}>

                    <h2 style={title}>
                        {item.inventory_name}
                    </h2>

                    <div style={descBox}>
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    );
}

// 🎨 СТИЛІ

const backBtn = {
    marginBottom: "30px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#6b7280",
    color: "white",
    cursor: "pointer",
};

const card = {
    background: "#d1d5db",
    borderRadius: "16px",
    width: "70%",
    margin: "0 auto",
    padding: "40px",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
};

const photoBox = {
    width: "300px",
    height: "300px",
    overflow: "hidden",

};

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0px",
};

const noPhoto = {
    width: "100%",
    height: "100%",
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const rightSide = {
    flex: 1,
    textAlign: "left",
};

const title = {
    marginBottom: "20px",
    color: "#000",
};

const descBox = {
    background: "#9ca3af",
    padding: "20px",
    borderRadius: "12px",
    minHeight: "120px",
    color: "#000",
};