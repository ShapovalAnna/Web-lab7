import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

// =======================
// STATIC UPLOADS
// =======================
app.use("/uploads", express.static("uploads"));

// =======================
// MULTER
// =======================
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

// =======================
// LOAD INVENTORY
// =======================
let inventory = [];

try {
    const data = fs.readFileSync(
        "inventory.json",
        "utf-8"
    );

    inventory = JSON.parse(data);

} catch (error) {
    inventory = [];
}

// =======================
// SAVE INVENTORY
// =======================
const saveInventory = () => {
    fs.writeFileSync(
        "inventory.json",
        JSON.stringify(inventory, null, 2)
    );
};

// =======================
// GET ALL
// =======================
app.get("/inventory", (req, res) => {
    res.json(inventory);
});

// =======================
// GET BY ID
// =======================
app.get("/inventory/:id", (req, res) => {

    const item = inventory.find(
        i => i.id == req.params.id
    );

    if (!item) {
        return res.status(404).json({
            error: "Not found"
        });
    }

    res.json(item);
});

// =======================
// CREATE
// =======================
app.post(
    "/register",
    upload.single("photo"),
    (req, res) => {

        const newItem = {
            id: Date.now(),

            inventory_name:
            req.body.inventory_name,

            description:
            req.body.description,

            photo: req.file
                ? `http://localhost:3000/uploads/${req.file.filename}`
                : "",
        };

        inventory.push(newItem);

        saveInventory();

        res.json(newItem);
    }
);

// =======================
// UPDATE TEXT
// =======================
app.put("/inventory/:id", (req, res) => {

    const item = inventory.find(
        i => i.id == req.params.id
    );

    if (!item) {
        return res.status(404).json({
            error: "Not found"
        });
    }

    item.inventory_name =
        req.body.inventory_name;

    item.description =
        req.body.description;

    saveInventory();

    res.json(item);
});

// =======================
// UPDATE PHOTO
// =======================
app.put(
    "/inventory/:id/photo",
    upload.single("photo"),
    (req, res) => {

        const item = inventory.find(
            i => i.id == req.params.id
        );

        if (!item) {
            return res.status(404).json({
                error: "Not found"
            });
        }

        if (req.file) {
            item.photo =
                `http://localhost:3000/uploads/${req.file.filename}`;
        }

        saveInventory();

        res.json(item);
    }
);

// =======================
// DELETE
// =======================
app.delete("/inventory/:id", (req, res) => {

    inventory = inventory.filter(
        i => i.id != req.params.id
    );

    saveInventory();

    res.json({
        success: true
    });
});

// =======================
// START SERVER
// =======================
app.listen(3000, () => {
    console.log(
        "Server running on http://localhost:3000"
    );
});