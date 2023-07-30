import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log(`The application is listening on http://localhost:3000`);
});