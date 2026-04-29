import { useState } from "react";
import InventoryCard from "./InventoryCard";
import InventoryQuickView from "./InventoryQuickView";

export default function InventoryGallery({ items }) {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div style={grid}>
                {items.map((item) => (
                    <InventoryCard
                        key={item.id}
                        item={item}
                        onOpen={setSelected}
                    />
                ))}
            </div>

            {selected && (
                <InventoryQuickView
                    item={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
}

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
};