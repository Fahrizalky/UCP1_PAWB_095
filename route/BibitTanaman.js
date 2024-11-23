import express, { Router } from "express";
const router = express.Router();
const bibitTanaman = [
    {
        id: 1,
        nama_tanaman: "Cabai",
        jenis: "Rawit",
        suplayer: "Budi",
        tahun: 2021,
        tanggal_masuk: 2,
        bulan_masuk: 5

    },
   
];

router.get("/", (req, res) => {
    res.send(bibitTanaman);
});
export default router;