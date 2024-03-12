import { NextFunction, Request, Response } from "express";
import { parseString } from "xml2js";
import Cptec from "../services/Cptec";

class PrevisaoController {
  async listaCidades(req: Request, res: Response, next: NextFunction) {
    const { cidade } = req.params;
    const cptec = new Cptec();
    const xml = await cptec.listaCidades(cidade);
    parseString(
      xml,
      { explicitArray: false, trim: true, explicitRoot: false },
      (error: any, result: any) => {
        if (error) {
          res.json({ message: error });
        } else {
          const { cidade } = result;
          res.locals = cidade instanceof Array ? cidade[0] : cidade;
          next();
        }
      }
    );
  }

  async previsao7dias(_: Request, res: Response) {
    const { id } = res.locals;
    const cptec = new Cptec();
    const xml = await cptec.previsao7dias(id);
    parseString(
      xml,
      { explicitArray: false, trim: true, explicitRoot: false },
      (error: any, result: any) => {
        if (error) {
          res.json({ message: error });
        } else {
          res.json(result);
        }
      }
    );
  }

  async previsao(_: Request, res: Response) {
    const { id } = res.locals;
    const cptec = new Cptec();
    const xml = await cptec.previsao(id);
    parseString(
      xml,
      { explicitArray: false, trim: true, explicitRoot: false },
      (error: any, result: any) => {
        if (error) {
          res.json({ message: error });
        } else {
          res.json(result);
        }
      }
    );
  }

  async previsaoEstendida(_: Request, res: Response) {
    const { id } = res.locals;
    const cptec = new Cptec();
    const xml = await cptec.previsaoEstendida(id);
    parseString(
      xml,
      { explicitArray: false, trim: true, explicitRoot: false },
      (error: any, result: any) => {
        if (error) {
          res.json({ message: error });
        } else {
          res.json(result);
        }
      }
    );
  }
}

export default new PrevisaoController();
