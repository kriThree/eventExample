import cors from "cors";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
const app = express();
app.use(helmet());
app.use(cors({
    origin: "*",
}));
app.use(json());
app.use(urlencoded({ extended: true }));
app.get("*", (req, res) => {
    console.log(req.path);
    res.status(200).send("Success");
});
app.listen(4000, async () => {
    try {
        console.log("🚀 Server ready to handle requests");
    }
    catch (e) {
        console.log(e);
    }
});
