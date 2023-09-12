import "express-async-errors";
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(errorMiddleware);
  return app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
  });
});
