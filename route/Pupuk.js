import express, { Router } from "express";
const router = express.Router();
const pupuk = [
    {
        id: 2,
        nama: "Urea",
        
        

    },
   
];

router.get("/", (req, res) => {
    res.send(pupuk);
});
export default router;