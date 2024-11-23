import express, { Router } from "express";
const router = express.Router();
const pupuk = [
    {
        id: 2,
        nama: "Urea",
        tahun_produksi: "2023",
        tahun_exp: "2025",
        jenis_pupuk: "Cair"
        

    },
   
];

router.get("/", (req, res) => {
    res.send(pupuk);
});
export default router;