import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminInventory />} />
                <Route path="/create" element={<AdminInventoryCreate />} />
                <Route path="/details/:id" element={<AdminInventoryDetails />} />
                <Route path="/edit/:id" element={<AdminInventoryEdit />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    );
}