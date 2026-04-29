import { useNavigate } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Favorites() {
    const { favorites } = useFavorites();
    const navigate = useNavigate();

    return (
        <div>

            {/*  HEADER */}
            <div style={topBar}>
                <button
                    onClick={() => navigate("/gallery")}
                    style={backBtn}
                >
                    Go back
                </button>
                {/* КОНТЕНТ */}
                <h1 style={title}>Favorites</h1>

            </div>



            <InventoryGallery items={favorites} />
        </div>
    );
}


const topBar = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#16171d",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"

};

const backBtn = {
    background: "#3b82f6",
    color: "white",
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
};

const title = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    margin: 0,
};