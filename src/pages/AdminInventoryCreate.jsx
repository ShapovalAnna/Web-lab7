import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInventory } from "../services/inventoryApi";

export default function AdminInventoryCreate() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert("Назва обов’язкова");
            return;
        }

        const formData = new FormData();
        formData.append("inventory_name", name);
        formData.append("description", desc);
        if (photo) formData.append("photo", photo);

        await createInventory(formData);
        navigate("/");
    };

    return (
        <div style={wrapper}>
            <button onClick={() => navigate("/")} style={backBtn}>
                ← Go back
            </button>

            <div style={card}>

                {/* Фото */}
                <label style={photoBox}>
                    {photo ? (
                        <img src={URL.createObjectURL(photo)} style={imgStyle} />
                    ) : (
                        <span>select photo</span>
                    )}

                    <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                </label>

                {/* Назва */}
                <input
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={nameInput}
                />

                {/* Опис */}
                <textarea
                    placeholder="description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    style={descInput}
                />

                {/*  Кнопка */}
                <button onClick={handleSubmit} style={saveBtn}>
                    save
                </button>
            </div>
        </div>
    );
}

//
// СТИЛІ
//

const wrapper = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#16171d",
};

const backBtn = {
    display: "block",
    margin: "0 auto 30px auto",
    padding: "12px 32px",
    borderRadius: "12px",
    border: "none",
    background: "#6b7280",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
};

const card = {
    background: "#d1d5db",
    borderRadius: "16px",
    width: "70%",
    maxWidth: "700px",
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "auto auto auto",
    gap: "20px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
};

const photoBox = {
    gridRow: "1 / 3",
    width: "100%",
    aspectRatio: "1/1",
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

const nameInput = {
    gridColumn: "1 / 2",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "#9ca3af",
    color: "#000",
    fontSize: "18px",
    textAlign: "center",
};

const descInput = {
    gridColumn: "2 / 3",
    gridRow: "1 / 3",
    width: "90%",
    minHeight: "200px",
    padding: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#9ca3af",
    color: "#000",
    fontSize: "16px",
    resize: "vertical",
};

const saveBtn = {
    gridColumn: "2 / 3",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #3b82f6)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
};