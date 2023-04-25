import express from 'express';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import IndexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views',join(__dirname, 'views'));
app.set('view engine','ejs');

console.log(join(__dirname, 'views'));
//Rutas
app.use(IndexRoutes);

app.use(express.static(join(__dirname,'public')));


app.listen(process.env.PORT || 3000);
console.log("Server on port: ", process.env.PORT || 3000);