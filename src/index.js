import  express  from "express";
import  dotenv  from "dotenv";

dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;
const app = express();

app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`It's alive on port ${PORT}`)
})