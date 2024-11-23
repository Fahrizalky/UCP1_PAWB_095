import express from "express";
import bodyParser from "body-parser";
import bibitRoute from "./routes/bibitTanaman.js";
import pupukRoute from "./routes/Pupuk.js";


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Menambahkan setiap rute dengan variabel yang unik
app.use("/Bibit", bibitRoute);



app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Welcome Petani Nusantara");
});

app.listen(PORT, () =>
    console.log(`Server berjalan di port : http://localhost:${PORT}`)
);
