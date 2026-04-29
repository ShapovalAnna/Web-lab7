import useFavorites from "../../hooks/useFavorites";

export default function InventoryCard({ item, onOpen }) {
    const { toggle, isFavorite } = useFavorites();

    return (
        <div style={card} onClick={() => onOpen(item)}>
            <img src={item.photo} style={img} />

            <div style={title}>
                {item.inventory_name}
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    toggle(item);
                }}
                style={favBtn}
            >
                {isFavorite(item.id) ? "❤️" : "🤍"}
            </button>
        </div>
    );
}

const card = {
    background: "#d1d5db",
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer",
    position: "relative",
    transition: "0.2s",
};

const img = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
};

const title = {
    marginTop: "10px",
    textAlign: "center",
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
};

const favBtn = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
};