import  express  from "express";
import  dotenv  from "dotenv";


dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.set("views", "./src");






app.get('/', (req, res)=> {
    res.render('index')
})

app.listen(PORT, ()=> {
    console.log(`It's alive on port ${PORT}`)
})