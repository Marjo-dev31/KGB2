import  express  from "express";
import  dotenv  from "dotenv";
import missionRoutes from "./routes/mission.route.js";
import backofficeRoutes from "./routes/backoffice.route.js";
import cors from 'cors';

dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;
const app = express();

app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src");



app.use('/', missionRoutes);

// app.use('/backoffice', (req,res)=>{
//     res.render('backoffice')
// });

app.use('/backoffice', backofficeRoutes)

app.use('/login', (req,res)=> {
    res.render('login')
});

app.listen(PORT, ()=> {
    console.log(`It's alive on port ${PORT}`)
})