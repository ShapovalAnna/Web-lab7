const API = "http://localhost:3000";

export const getInventory = async () => {
    const res = await fetch(`${API}/inventory`);
    return res.json();
};

export const getInventoryById = async (id) => {
    const res = await fetch(`${API}/inventory/${id}`);
    return res.json();
};

export const createInventory = async (formData) => {
    const res = await fetch(`${API}/register`, {
        method: "POST",
        body: formData,
    });
    return res.json();
};

export const updateInventory = async (id, data) => {
    const res = await fetch(`${API}/inventory/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updateInventoryPhoto = async (id, formData) => {
    const res = await fetch(`${API}/inventory/${id}/photo`, {
        method: "PUT",
        body: formData,
    });
    return res.json();
};

export const deleteInventory = async (id) => {
    await fetch(`${API}/inventory/${id}`, {
        method: "DELETE",
    });
};