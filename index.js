import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/Mobil.js";
import sepedaRoute from "./routes/Sepeda.js";
import sepatuRoute from "./routes/Sepatu.js";
import hpRoute from "./routes/HP.js";
import kaosRoute from "./routes/Kaos.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Menambahkan setiap rute dengan variabel yang unik
app.use("/mobil", mobilRoute);
app.use("/sepeda", sepedaRoute);
app.use("/sepatu", sepatuRoute);
app.use("/hp", hpRoute);
app.use("/kaos", kaosRoute);

app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagi");
});

app.listen(PORT, () =>
    console.log(`Server berjalan di port : http://localhost:${PORT}`)
);
