import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

// 📁 uploads
app.use("/uploads", express.static("uploads"));

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

// 🗂 тимчасове сховище
let inventory = [];

// =======================
// ✅ GET ALL
// =======================
app.get("/inventory", (req, res) => {
    res.json(inventory);
});

// =======================
// ✅ GET BY ID
// =======================
app.get("/inventory/:id", (req, res) => {
    const item = inventory.find(i => i.id == req.params.id);

    if (!item) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json(item);
});

// =======================
// ✅ CREATE (з фото)
// =======================
app.post("/register", upload.single("photo"), (req, res) => {
    const newItem = {
        id: Date.now(),
        inventory_name: req.body.inventory_name,
        description: req.body.description,
        photo: req.file
            ? `http://localhost:3000/uploads/${req.file.filename}`
            : "",
    };

    inventory.push(newItem);
    res.json(newItem);
});

// =======================
// ✅ UPDATE TEXT
// =======================
app.put("/inventory/:id", (req, res) => {
    const item = inventory.find(i => i.id == req.params.id);

    if (!item) {
        return res.status(404).json({ error: "Not found" });
    }

    item.inventory_name = req.body.inventory_name;
    item.description = req.body.description;

    res.json(item);
});

// =======================
// ✅ UPDATE PHOTO
// =======================
app.put("/inventory/:id/photo", upload.single("photo"), (req, res) => {
    const item = inventory.find(i => i.id == req.params.id);

    if (!item) {
        return res.status(404).json({ error: "Not found" });
    }

    if (req.file) {
        item.photo = `http://localhost:3000/uploads/${req.file.filename}`;
    }

    res.json(item);
});

// =======================
// ✅ DELETE
// =======================
app.delete("/inventory/:id", (req, res) => {
    inventory = inventory.filter(i => i.id != req.params.id);
    res.json({ success: true });
});

// =======================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});