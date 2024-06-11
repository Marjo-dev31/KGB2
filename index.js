import  express  from "express";
import  dotenv  from "dotenv";
import missionRoutes from "./routes/mission.route.js";
import backofficeRoutes from "./routes/backoffice.route.js";
import cors from 'cors';
import connectDB from "./db/mongo.js";
import loginRoutes from "./routes/login.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import createJWT from "./middlewares/authentication.middleware.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;
const app = express();

app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src");



app.use('/', missionRoutes);

app.use('/backoffice', backofficeRoutes)

app.use('/login', loginRoutes)

app.use('/signin', (req,res)=>{
    res.render('login')
})

app.use('/users', userRoutes)

app.listen(PORT, ()=> {
    connectDB().then(()=> {
        console.log(`It's alive on port ${PORT}`)
})
});
