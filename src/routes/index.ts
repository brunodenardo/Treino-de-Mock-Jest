import { Router, Request, Response } from "express";
import controller from "../controllers/PrevisaoController";

const routes = Router();
// http://localhost:3010/previsao/santa branca
routes.get("/previsao/:cidade", controller.listaCidades, controller.previsao);
// http://localhost:3010/previsao7/santa branca
routes.get("/previsao7/:cidade", controller.listaCidades, controller.previsao7dias);
// http://localhost:3010/estendida/santa branca
routes.get("/estendida/:cidade", controller.listaCidades, controller.previsaoEstendida);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;