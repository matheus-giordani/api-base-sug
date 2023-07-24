import  express  from "express";
import { config } from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;
const path = process.env.NODE_ENV === 'production' ? 'variables.production.env' : 'variables.env';

config({ path });
console.log({path})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
  });
