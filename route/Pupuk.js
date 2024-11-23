import express, { Router } from "express";
const router = express.Router();
const pupuk = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        merk: "Porsche",
        model: "sport",
        warna: "Kuning",
        tahun: 2024,
    },
];

router.get("/", (req, res) => {
    res.send(pupuk);
});
export default router;