import express, { Router } from "express";
const router = express.Router();
const bibitTanaman = [
    {
        id: 1,
        nama_tanaman: "Cabai",
        jenis: "Rawit",
        
        

    },
   
];

router.get("/", (req, res) => {
    res.send(bibitTanaman);
});
export defau