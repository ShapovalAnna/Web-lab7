import { useState } from "react";

export default function InventoryForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("inventory_name", name);
        formData.append("description", desc);
        if (photo) formData.append("photo", photo);

        onSubmit(formData);

        setName("");
        setDesc("");
        setPhoto(null);
    };

    return (
        <form onSubmit={handleSubmit} style={outer}>
            <div style={card}>

                {/* LEFT */}
                <div style={left}>
                    <label style={photoBox}>
                        {photo ? (
                            <img src={URL.createObjectURL(photo)} style={img} />
                        ) : (
                            <span>select photo</span>
                        )}

                        <input
                            type="file"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                    </label>

                    <input
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={nameInput}
                    />
                </div>

                {/* RIGHT */}
                <div style={right}>
          <textarea
              placeholder="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={descInput}
          />

                    <button type="submit" style={saveBtn}>
                        save
                    </button>
                </div>
            </div>
        </form>
    );
}

// 🎨 ФІКС ЛЕЙАУТУ

const outer = {
    display: "flex",
    justifyContent: "center",
};

const card = {
    background: "#d1d5db",
    borderRadius: "20px",
    padding: "40px",
    width: "800px", // 🔥 ФІКС ШИРИНИ
    display: "flex",
    gap: "40px",
    alignItems: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const left = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
};

const right = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
};

const photoBox = {
    width: "250px",
    height: "250px",
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};

const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

const nameInput = {
    width: "250px",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "#9ca3af",
    fontSize: "18px",
    color: "#000",
    textAlign: "center",
};

const descInput = {
    width: "400px", // 🔥 ОБМЕЖИЛИ
    height: "200px",
    padding: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#9ca3af",
    fontSize: "16px",
    color: "#000",
};

const saveBtn = {
    width: "400px", // 🔥 ЩОБ НЕ ВИЛАЗИЛА
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #3b82f6)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
};