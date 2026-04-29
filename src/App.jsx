import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminInventory />} />
                <Route path="/create" element={<AdminInventoryCreate />} />
                <Route path="/details/:id" element={<AdminInventoryDetails />} />
                <Route path="/edit/:id" element={<AdminInventoryEdit />} />
            </Routes>
        </BrowserRouter>
    );
}