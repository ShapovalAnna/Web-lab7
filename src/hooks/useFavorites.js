import { useState, useEffect } from "react";

export default function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    // при старті
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    }, []);

    // toggle
    const toggle = (item) => {
        let updated;

        if (favorites.some((f) => f.id === item.id)) {
            updated = favorites.filter((f) => f.id !== item.id);
        } else {
            updated = [...favorites, item];
        }

        setFavorites(updated); // миттєвий UI
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    // перевірка
    const isFavorite = (id) => {
        return favorites.some((f) => f.id === id);
    };

    return { favorites, toggle, isFavorite };
}